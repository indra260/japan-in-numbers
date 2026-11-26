// Screenshot capture for the entry: serves app/ with the kit's serve.ts, renders
// each view in headless Chromium via CDP, and writes real JPEG renders into
// screenshots/ within the gate's limits (<= 256 KiB, long side <= 1280, short >= 360).
import { spawn } from 'node:child_process';
import { writeFileSync, statSync } from 'node:fs';

const SHELL = `${process.env.HOME}/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell`;
const PORT = 9224;
const BASE = 'http://127.0.0.1:8137';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SHOTS = [
  { file: 'screenshots/1-cover.jpg', url: `${BASE}/#/`, w: 1280, h: 800, mobile: false, waitFor: '.stat-card' },
  { file: 'screenshots/2-people.jpg', url: `${BASE}/#/people`, w: 1280, h: 800, mobile: false, waitFor: '.stat-card' },
  { file: 'screenshots/3-prefectures.jpg', url: `${BASE}/#/prefectures`, w: 1280, h: 800, mobile: false, waitFor: '#pf-body tr' },
  { file: 'screenshots/4-phone.jpg', url: `${BASE}/#/`, w: 390, h: 844, mobile: true, waitFor: '.stat-card' },
];

const server = spawn('node', ['serve.ts', '--port', '8137'], { stdio: 'ignore' });
const shell = spawn(SHELL, [
  '--headless', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  `--remote-debugging-port=${PORT}`, 'about:blank',
], { stdio: ['ignore', 'pipe', 'pipe'] });
shell.stderr.on('data', () => {});

async function getJson(path, method = 'GET') {
  const res = await fetch(`http://127.0.0.1:${PORT}${path}`, { method });
  return res.json();
}

try {
  for (let i = 0; i < 60; i++) { try { await getJson('/json/version'); break; } catch { await sleep(300); } }
  await sleep(800); // let serve.ts come up

  for (const shot of SHOTS) {
    const target = await getJson(`/json/new?${encodeURIComponent(shot.url)}`, 'PUT');
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    let id = 0;
    const pending = new Map();
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const mid = ++id;
      pending.set(mid, { resolve, reject });
      ws.send(JSON.stringify({ id: mid, method, params }));
    });
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
      }
    };
    await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
    await send('Page.enable');
    await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: shot.w, height: shot.h, deviceScaleFactor: 1, mobile: shot.mobile,
    });
    await send('Page.navigate', { url: shot.url });
    let ok = false;
    for (let i = 0; i < 40 && !ok; i++) {
      try {
        const r = await send('Runtime.evaluate', {
          expression: `!!document.querySelector('${shot.waitFor}')`,
          returnByValue: true,
        });
        ok = !!r?.result?.value;
      } catch {}
      if (!ok) await sleep(400);
    }
    if (!ok) throw new Error(`view never rendered for ${shot.file}`);
    await sleep(700);
    let quality = 85;
    for (;;) {
      const cap = await send('Page.captureScreenshot', { format: 'jpeg', quality });
      writeFileSync(shot.file, Buffer.from(cap.data, 'base64'));
      const size = statSync(shot.file).size;
      console.log(shot.file, `${shot.w}x${shot.h}`, `${size} bytes`, `q${quality}`);
      if (size <= 262144 || quality <= 45) break;
      quality -= 15;
    }
    ws.close();
    await fetch(`http://127.0.0.1:${PORT}/json/close/${target.id}`).catch(() => {});
  }
  console.log('all shots captured');
} catch (e) {
  console.error('FAILED:', e.message);
  process.exitCode = 1;
} finally {
  shell.kill('SIGKILL');
  server.kill('SIGKILL');
}
