// SVG chart helpers — every chart on the site is drawn here, in code, from the data files.
// No libraries, no images: the markup is generated as strings and inlined by the views.

const INK = '#232838';
const MUTED = '#7a7568';
const GRID = '#e7dfd0';
export const SERIES = ['#22336b', '#c0392b', '#c9962e', '#4d7c59', '#4d9db8', '#8a6fc9'];

function niceMax(v) {
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / pow;
  return (n <= 1 ? 1 : n <= 1.5 ? 1.5 : n <= 2 ? 2 : n <= 3 ? 3 : n <= 5 ? 5 : 10) * pow;
}
const fmt = (v, d = 0) => v.toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: d });

// Multi-series line chart. series: [{label, color, points: [[x, y], ...]}]
export function lineChart({ series, width = 720, height = 300, yLabel = '', yDecimals = 0 }) {
  const padL = 52, padR = 14, padT = 14, padB = 30;
  const xs = series.flatMap((s) => s.points.map((p) => p[0]));
  const ys = series.flatMap((s) => s.points.map((p) => p[1]));
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const yMax = niceMax(Math.max(...ys) * 1.05);
  const yMin = Math.min(0, Math.min(...ys));
  const X = (x) => padL + ((x - xMin) / (xMax - xMin)) * (width - padL - padR);
  const Y = (y) => padT + (1 - (y - yMin) / (yMax - yMin)) * (height - padT - padB);
  let out = `<svg viewBox="0 0 ${width} ${height}" role="img" class="chart">`;
  for (let i = 0; i <= 4; i++) {
    const v = yMin + ((yMax - yMin) * i) / 4, y = Y(v);
    out += `<line x1="${padL}" y1="${y}" x2="${width - padR}" y2="${y}" stroke="${GRID}"/><text x="${padL - 8}" y="${y + 4}" text-anchor="end" class="tick">${fmt(v, yDecimals)}</text>`;
  }
  const xTicks = series[0].points.filter((_, i) => i % Math.ceil(series[0].points.length / 6) === 0 || i === series[0].points.length - 1);
  for (const [x] of xTicks) out += `<text x="${X(x)}" y="${height - 8}" text-anchor="middle" class="tick">${x}</text>`;
  if (yLabel) out += `<text x="${padL}" y="${padT - 2}" class="tick">${yLabel}</text>`;
  for (const s of series) {
    const d = s.points.map((p, i) => `${i ? 'L' : 'M'}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join(' ');
    out += `<path d="${d}" fill="none" stroke="${s.color}" stroke-width="2.5" stroke-linejoin="round"/>`;
    for (const p of s.points) out += `<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="3" fill="${s.color}"/>`;
  }
  out += '</svg>';
  const legend = series.map((s) => `<span class="legend-item"><i style="background:${s.color}"></i>${s.label}</span>`).join('');
  return `<div class="chart-wrap">${out}<div class="legend">${legend}</div></div>`;
}

// Horizontal bars. rows: [{label, value}] — handles negative values (e.g. trade balance).
export function barChart({ rows, width = 720, rowH = 34, unit = '', decimals = 0, color = SERIES[0] }) {
  const height = rows.length * rowH + 10;
  const labelW = 210, valW = 90;
  const max = niceMax(Math.max(...rows.map((r) => Math.abs(r.value))) * 1.02);
  const zeroX = labelW + (Math.min(...rows.map((r) => r.value)) < 0 ? ((width - labelW - valW) * 0.35) : 0);
  const scale = (width - labelW - valW) / (max + (zeroX > labelW ? max * 0.55 : 0));
  let out = `<svg viewBox="0 0 ${width} ${height}" role="img" class="chart">`;
  rows.forEach((r, i) => {
    const y = i * rowH + 8, w = Math.abs(r.value) * scale;
    const x = r.value < 0 ? zeroX - w : zeroX;
    out += `<text x="${labelW - 10}" y="${y + 16}" text-anchor="end" class="bar-label">${r.label}</text>`;
    out += `<rect x="${x}" y="${y}" width="${Math.max(w, 2)}" height="18" rx="3" fill="${r.value < 0 ? '#c0392b' : color}"/>`;
    out += `<text x="${r.value < 0 ? x - 8 : x + w + 8}" y="${y + 14}" text-anchor="${r.value < 0 ? 'end' : 'start'}" class="bar-value">${fmt(r.value, decimals)}${unit}</text>`;
  });
  return `<div class="chart-wrap">${out + '</svg>'}</div>`;
}

// Vertical grouped bars for two series (births vs deaths). rows: [{year, a, b}]
export function groupedBars({ rows, aLabel, bLabel, width = 720, height = 300, unit = '' }) {
  const padL = 52, padR = 10, padT = 14, padB = 30;
  const max = niceMax(Math.max(...rows.flatMap((r) => [r.a, r.b])) * 1.05);
  const Y = (v) => padT + (1 - v / max) * (height - padT - padB);
  const slot = (width - padL - padR) / rows.length;
  let out = `<svg viewBox="0 0 ${width} ${height}" role="img" class="chart">`;
  for (let i = 0; i <= 4; i++) {
    const v = (max * i) / 4, y = Y(v);
    out += `<line x1="${padL}" y1="${y}" x2="${width - padR}" y2="${y}" stroke="${GRID}"/><text x="${padL - 8}" y="${y + 4}" text-anchor="end" class="tick">${fmt(v)}</text>`;
  }
  rows.forEach((r, i) => {
    const x = padL + i * slot;
    out += `<rect x="${x + slot * 0.14}" y="${Y(r.a)}" width="${slot * 0.32}" height="${Y(0) - Y(r.a)}" fill="${SERIES[0]}"/>`;
    out += `<rect x="${x + slot * 0.52}" y="${Y(r.b)}" width="${slot * 0.32}" height="${Y(0) - Y(r.b)}" fill="${SERIES[1]}"/>`;
    out += `<text x="${x + slot / 2}" y="${height - 8}" text-anchor="middle" class="tick">${r.year}</text>`;
  });
  out += '</svg>';
  return `<div class="chart-wrap">${out}<div class="legend"><span class="legend-item"><i style="background:${SERIES[0]}"></i>${aLabel}</span><span class="legend-item"><i style="background:${SERIES[1]}"></i>${bLabel}</span></div><p class="chart-note">${unit}</p></div>`;
}

// 100% stacked bars for age structure. rows: [{year, young, working, senior}]
export function stackedAge({ rows, width = 720, rowH = 40 }) {
  const height = rows.length * rowH + 8;
  const labelW = 56;
  let out = `<svg viewBox="0 0 ${width} ${height}" role="img" class="chart">`;
  const cols = [['young', '#4d9db8', '0\u201314'], ['working', '#22336b', '15\u201364'], ['senior', '#c0392b', '65+']];
  rows.forEach((r, i) => {
    const y = i * rowH + 6;
    let x = labelW;
    out += `<text x="${labelW - 10}" y="${y + 17}" text-anchor="end" class="bar-label">${r.year}</text>`;
    for (const [key, color] of cols) {
      const w = ((width - labelW - 6) * r[key]) / 100;
      out += `<rect x="${x}" y="${y}" width="${w}" height="22" fill="${color}"/>`;
      if (w > 44) out += `<text x="${x + w / 2}" y="${y + 15}" text-anchor="middle" class="stack-value">${r[key]}%</text>`;
      x += w;
    }
  });
  out += '</svg>';
  const legend = cols.map(([, c, l]) => `<span class="legend-item"><i style="background:${c}"></i>${l} years</span>`).join('');
  return `<div class="chart-wrap">${out}<div class="legend">${legend}</div></div>`;
}

// Donut chart. slices: [{label, value, color}] — values are percentages.
export function donut({ slices, width = 340, height = 340, centerLabel = '' }) {
  const cx = width / 2, cy = height / 2, r = 128, ir = 74;
  let angle = -Math.PI / 2;
  let out = `<svg viewBox="0 0 ${width} ${height}" role="img" class="chart">`;
  for (const s of slices) {
    const a = (s.value / 100) * Math.PI * 2;
    const x1 = cx + r * Math.cos(angle), y1 = cy + r * Math.sin(angle);
    const x2 = cx + r * Math.cos(angle + a), y2 = cy + r * Math.sin(angle + a);
    const xi1 = cx + ir * Math.cos(angle + a), yi1 = cy + ir * Math.sin(angle + a);
    const xi2 = cx + ir * Math.cos(angle), yi2 = cy + ir * Math.sin(angle);
    out += `<path d="M${x1},${y1} A${r},${r} 0 ${a > Math.PI ? 1 : 0} 1 ${x2},${y2} L${xi1},${yi1} A${ir},${ir} 0 ${a > Math.PI ? 1 : 0} 0 ${xi2},${yi2} Z" fill="${s.color}"/>`;
    angle += a;
  }
  out += `<text x="${cx}" y="${cy + 5}" text-anchor="middle" class="donut-center">${centerLabel}</text></svg>`;
  const legend = slices.map((s) => `<span class="legend-item"><i style="background:${s.color}"></i>${s.label} \u2014 ${s.value}%</span>`).join('');
  return `<div class="chart-wrap donut-wrap">${out}<div class="legend legend-col">${legend}</div></div>`;
}
