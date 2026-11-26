// Router and shell wiring. Each section view is a separate module loaded with
// import() the first time its link is followed, so the first load carries only
// the shell, the styles and the overview — the rest arrives on demand.
const ROUTES = {
  '': { title: 'Japan in Numbers — National Statistics', load: () => import('./views-overview.js') },
  people: { title: 'People & Society — Japan in Numbers', load: () => import('./views-people.js') },
  economy: { title: 'Economy & Work — Japan in Numbers', load: () => import('./views-economy.js') },
  prefectures: { title: '47 Prefectures — Japan in Numbers', load: () => import('./views-prefectures.js') },
  land: { title: 'Land & Nature — Japan in Numbers', load: () => import('./views-land.js') },
  life: { title: 'Health, School & Daily Life — Japan in Numbers', load: () => import('./views-life.js') },
};

const view = document.getElementById('view');
const cache = new Map();

async function show() {
  const key = location.hash.replace(/^#\/?/, '').split('/')[0];
  const route = ROUTES[key] ?? ROUTES[''];
  document.title = route.title;
  document.querySelectorAll('.site-nav a').forEach((a) =>
    a.classList.toggle('is-active', a.dataset.route === (ROUTES[key] ? key : '')));
  if (!cache.has(key)) cache.set(key, route.load());
  const mod = await cache.get(key);
  mod.render(view);
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', show);
show();
