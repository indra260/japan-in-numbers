// Economy & work page: GDP path, the trade ledger, jobs, wages and the visitor boom.
import { GDP_TREND, TRADE, ECONOMY_STATS, ECONOMY_FACTS } from './data-economy.js';
import { lineChart, barChart, SERIES } from './charts.js';
import { statCards, factCards, panel, sectionHead } from './views-common.js';

export function render(el) {
  el.innerHTML = `
    ${sectionHead('Economy & Work', 'The world\u2019s fourth-largest economy',
      'Still a manufacturing and export power, now with something it has not had in a generation: rising prices and rapidly rising wages, driven by a shortage of workers.')}
    ${statCards(ECONOMY_STATS)}
    ${panel('Nominal GDP, \u00a5 trillion', GDP_TREND.source,
      lineChart({ series: [{ label: 'Nominal GDP (\u00a5 trillion)', color: SERIES[0], points: GDP_TREND.points }], yFloor: 400 }))}
    ${panel('Trade in 2024, \u00a5 trillion', TRADE.source, `
      ${barChart({ rows: TRADE.rows, unit: 'T', decimals: 1 })}
      <h3 class="panel-sub">Biggest trade lanes</h3>
      ${barChart({ rows: TRADE.partners, unit: 'T', decimals: 1, color: SERIES[3] })}`)}
    ${factCards(ECONOMY_FACTS)}`;
}
