// Health, school & daily life page: three card groups with their own subheads,
// plus the elementary-pupil trend — the one chart that explains the section.
import { HEALTH_STATS, EDUCATION_STATS, PUPILS_TREND, DAILY_LIFE, LIFE_FACTS } from './data-life.js';
import { lineChart, SERIES } from './charts.js';
import { statCards, factCards, panel, sectionHead } from './views-common.js';

export function render(el) {
  el.innerHTML = `
    ${sectionHead('Health, School & Daily Life', 'Long lives, full classrooms, open all night',
      'Universal healthcare since 1961, some of the strongest school results in the world, and a convenience store for every couple of thousand people.')}
    <h2 class="group-head">Health &amp; safety</h2>
    ${statCards(HEALTH_STATS)}
    <h2 class="group-head">Education</h2>
    ${statCards(EDUCATION_STATS)}
    ${panel('Elementary pupils, millions', PUPILS_TREND.source, `
      ${lineChart({ series: [{ label: 'Elementary pupils (millions)', color: SERIES[3], points: PUPILS_TREND.points }], yDecimals: 1 })}
      <p class="chart-note">The classrooms empty as the birth cohorts shrink: fewer than half as many six-to-twelve-year-olds as in 1980, and a new record low almost every year.</p>`)}
    <h2 class="group-head">Daily life</h2>
    ${statCards(DAILY_LIFE)}
    ${factCards(LIFE_FACTS)}`;
}
