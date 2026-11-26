// Land & nature page: islands, forests, volcanoes, climate normals and the energy mix.
import { ENERGY_MIX, LAND_STATS, LAND_FACTS, CLIMATE } from './data-land.js';
import { donut, barChart, SERIES } from './charts.js';
import { statCards, factCards, panel, sectionHead } from './views-common.js';

export function render(el) {
  el.innerHTML = `
    ${sectionHead('Land & Nature', 'A mountainous arc of 14,125 islands',
      'Longer than it is wide, wetter than almost anywhere, and sitting on the meeting point of four tectonic plates \u2014 the land explains a lot about the numbers everywhere else on this site.')}
    ${statCards(LAND_STATS)}
    ${panel('Where the electricity comes from', ENERGY_MIX.source,
      donut({ slices: ENERGY_MIX.slices, centerLabel: 'FY2023' }))}
    ${panel('Average temperature by city, \u00b0C', CLIMATE.source,
      barChart({ rows: CLIMATE.rows, unit: '\u00b0', decimals: 1, color: SERIES[4] }))}
    ${factCards(LAND_FACTS)}`;
}
