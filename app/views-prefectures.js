// Prefectures page: all 47, with a working search box, a region filter and
// sortable columns. The table is rendered from data-prefectures.js and re-rendered
// on every control change — nothing here is decorative.
import { PREFECTURES, PREFECTURE_SOURCE, PREFECTURE_FACTS } from './data-prefectures.js';
import { factCards, sectionHead } from './views-common.js';

const TOTAL = PREFECTURES.reduce((a, p) => a + p.pop, 0);
const REGIONS = ['All regions', ...new Set(PREFECTURES.map((p) => p.region))];

export function render(el) {
  el.innerHTML = `
    ${sectionHead('47 Prefectures', 'One country, forty-seven worlds',
      'From Hokkaid\u014d\u2019s 5.2 million to Tokyo\u2019s 14.0 million. Search by name or capital, filter by region, and click a column heading to sort. Populations are the 2020 census counts.')}
    <div class="controls">
      <label class="control">Search
        <input id="pf-search" type="search" placeholder="Try \u201cKyoto\u201d or \u201cNaha\u201d\u2026" autocomplete="off">
      </label>
      <label class="control">Region
        <select id="pf-region">${REGIONS.map((r) => `<option>${r}</option>`).join('')}</select>
      </label>
      <p class="control-readout" id="pf-count" role="status"></p>
    </div>
    <div class="table-wrap">
      <table class="pf-table">
        <thead><tr>
          <th>#</th>
          <th><button class="th-sort" data-sort="name">Prefecture</button></th>
          <th>Capital</th><th>Region</th>
          <th class="num"><button class="th-sort" data-sort="pop">Population</button></th>
          <th class="num">Share</th>
        </tr></thead>
        <tbody id="pf-body"></tbody>
      </table>
    </div>
    <p class="chart-note">Source: ${PREFECTURE_SOURCE}. Share = the prefecture\u2019s share of the national census total.</p>
    ${factCards(PREFECTURE_FACTS)}`;

  const body = el.querySelector('#pf-body');
  const count = el.querySelector('#pf-count');
  const search = el.querySelector('#pf-search');
  const region = el.querySelector('#pf-region');
  let sortKey = 'pop';
  let sortDir = -1;

  const draw = () => {
    const q = search.value.trim().toLowerCase();
    const rows = PREFECTURES
      .filter((p) => (region.value === 'All regions' || p.region === region.value))
      .filter((p) => !q || p.name.toLowerCase().includes(q) || p.capital.toLowerCase().includes(q))
      .sort((a, b) => sortKey === 'pop' ? (a.pop - b.pop) * sortDir : a.name.localeCompare(b.name) * sortDir);
    body.innerHTML = rows.map((p) => `
      <tr>
        <td>${PREFECTURES.indexOf(p) + 1}</td>
        <td><strong>${p.name}</strong></td>
        <td>${p.capital}</td><td>${p.region}</td>
        <td class="num">${p.pop.toLocaleString('en-US')}</td>
        <td class="num">${((p.pop / TOTAL) * 100).toFixed(1)}%</td>
      </tr>`).join('') || '<tr><td colspan="6" class="empty">No prefecture matches that search.</td></tr>';
    const sum = rows.reduce((a, p) => a + p.pop, 0);
    count.textContent = `${rows.length} of 47 prefectures \u00b7 ${sum.toLocaleString('en-US')} people`;
  };
  search.addEventListener('input', draw);
  region.addEventListener('change', draw);
  el.querySelectorAll('.th-sort').forEach((b) => b.addEventListener('click', () => {
    if (sortKey === b.dataset.sort) sortDir *= -1;
    else { sortKey = b.dataset.sort; sortDir = sortKey === 'pop' ? -1 : 1; }
    draw();
  }));
  draw();
}
