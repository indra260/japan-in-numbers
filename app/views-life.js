// Health, school & daily life page: three card groups with their own subheads.
import { HEALTH_STATS, EDUCATION_STATS, DAILY_LIFE, LIFE_FACTS } from './data-life.js';
import { statCards, factCards, sectionHead } from './views-common.js';

export function render(el) {
  el.innerHTML = `
    ${sectionHead('Health, School & Daily Life', 'Long lives, full classrooms, open all night',
      'Universal healthcare since 1961, some of the strongest school results in the world, and a convenience store for every couple of thousand people.')}
    <h2 class="group-head">Health &amp; safety</h2>
    ${statCards(HEALTH_STATS)}
    <h2 class="group-head">Education</h2>
    ${statCards(EDUCATION_STATS)}
    <h2 class="group-head">Daily life</h2>
    ${statCards(DAILY_LIFE)}
    ${factCards(LIFE_FACTS)}`;
}
