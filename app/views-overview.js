// Overview page: the headline indicators, the population story with a working
// chart toggle (total population / age shares), and doors into every section.
import { HEADLINES, POPULATION_TREND, AGE_SHARES, OVERVIEW_FACTS } from './data-core.js';
import { lineChart, stackedAge, SERIES } from './charts.js';
import { statCards, factCards, panel } from './views-common.js';

export function render(el) {
  el.innerHTML = `
    <div class="hero">
      <p class="kicker">Japan \u00b7 \u65e5\u672c\u306e\u6570\u5b57</p>
      <h1>Japan in Numbers</h1>
      <p class="intro">The essential statistics of the world\u2019s most closely watched society \u2014
      population, economy, land and daily life, every figure with its official source and year.</p>
    </div>
    ${statCards(HEADLINES)}
    ${panel('A population that peaked in 2008', POPULATION_TREND.source, `
      <div class="toggle" role="group" aria-label="Chart choice">
        <button class="toggle-btn is-active" data-chart="trend">Total population</button>
        <button class="toggle-btn" data-chart="ages">Age shares</button>
      </div>
      <div id="overview-chart"></div>
      <p class="chart-note" id="overview-chart-note"></p>`)}
    ${factCards(OVERVIEW_FACTS)}
    <nav class="door-grid" aria-label="Explore the sections">
      <a class="door" href="#/people"><strong>People &amp; Society</strong><span>Births, deaths, longevity, households</span></a>
      <a class="door" href="#/economy"><strong>Economy &amp; Work</strong><span>GDP, trade, jobs, wages, visitors</span></a>
      <a class="door" href="#/prefectures"><strong>47 Prefectures</strong><span>Search and sort every prefecture</span></a>
      <a class="door" href="#/land"><strong>Land &amp; Nature</strong><span>Islands, forests, climate, energy</span></a>
      <a class="door" href="#/life"><strong>Health, School &amp; Daily Life</strong><span>Care, classrooms, konbini and bullet trains</span></a>
    </nav>`;

  const chartBox = el.querySelector('#overview-chart');
  const noteBox = el.querySelector('#overview-chart-note');
  const show = (kind) => {
    if (kind === 'trend') {
      chartBox.innerHTML = lineChart({ series: [{ label: 'Total population (millions)', color: SERIES[0], points: POPULATION_TREND.points }] });
      noteBox.textContent = 'Census counts to 2020; 2024 is the official estimate. The line turns down after 2008 and never comes back.';
    } else {
      chartBox.innerHTML = stackedAge({ rows: AGE_SHARES.rows });
      noteBox.textContent = 'In 1970 one Japanese person in fourteen was 65 or over. In 2024 it is nearly one in three. Source: ' + AGE_SHARES.source + '.';
    }
    el.querySelectorAll('.toggle-btn').forEach((b) => b.classList.toggle('is-active', b.dataset.chart === kind));
  };
  el.querySelectorAll('.toggle-btn').forEach((b) => b.addEventListener('click', () => show(b.dataset.chart)));
  show('trend');
}
