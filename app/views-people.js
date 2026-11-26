// People & society page: the demographic engine room — births vs deaths,
// life expectancy for women and men, households and foreign residents.
import { BIRTHS_DEATHS, LIFE_EXPECTANCY, PEOPLE_STATS, PEOPLE_FACTS } from './data-people.js';
import { groupedBars, lineChart, SERIES } from './charts.js';
import { statCards, factCards, panel, sectionHead } from './views-common.js';

export function render(el) {
  el.innerHTML = `
    ${sectionHead('People & Society', 'Fewer births, longer lives',
      'Japan\u2019s defining story. Births have halved since the second baby boom while deaths climb with the age of the population \u2014 and the people who are born live longer than almost anyone else on Earth.')}
    ${statCards(PEOPLE_STATS)}
    ${panel('Births and deaths, thousands per year', BIRTHS_DEATHS.source,
      groupedBars({ rows: BIRTHS_DEATHS.points.map((p) => ({ year: p.year, a: p.births, b: p.deaths })), aLabel: 'Births', bLabel: 'Deaths', unit: 'Deaths passed births for good in 2007. The 2024 gap \u2014 about 919,000 more deaths \u2014 is the widest ever recorded.' }))}
    ${panel('Life expectancy at birth, years', LIFE_EXPECTANCY.source,
      lineChart({ series: [
        { label: 'Women', color: SERIES[1], points: LIFE_EXPECTANCY.points.map((p) => [p.year, p.women]) },
        { label: 'Men', color: SERIES[0], points: LIFE_EXPECTANCY.points.map((p) => [p.year, p.men]) },
      ], yDecimals: 0, yFloor: 60 }))}
    ${factCards(PEOPLE_FACTS)}`;
}
