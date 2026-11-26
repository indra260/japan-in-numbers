// Economy & work: output, prices, trade, jobs, wages, visitors.
// Sources: Cabinet Office, Statistics Bureau, Ministry of Finance, JNTO, NTA, OECD.

export const GDP_TREND = {
  source: 'Cabinet Office, National Accounts (nominal GDP, \u00a5 trillion)',
  points: [
    [2000, 535], [2005, 524], [2010, 506], [2015, 538],
    [2019, 558], [2020, 540], [2021, 552], [2022, 564], [2023, 592], [2024, 609],
  ],
};

export const TRADE = {
  source: 'Ministry of Finance, Trade Statistics of Japan, 2024 (\u00a5 trillion)',
  rows: [
    { label: 'Exports', value: 107.1 },
    { label: 'Imports', value: 112.4 },
    { label: 'Balance', value: -5.3 },
  ],
  partners: [
    { label: 'Exports to the United States', value: 21.3 },
    { label: 'Exports to China', value: 18.9 },
    { label: 'Exports to the EU', value: 10.4 },
    { label: 'Imports from China', value: 27.0 },
    { label: 'Imports from the United States', value: 12.5 },
  ],
};

export const ECONOMY_STATS = [
  { value: '\u00a5609T', label: 'Nominal GDP', note: '4th in the world after the US, China and Germany', source: 'Cabinet Office', year: 2024 },
  { value: '$33,800', label: 'GDP per person', note: 'Nominal, in US dollars \u2014 squeezed by the weaker yen', source: 'IMF, World Economic Outlook', year: 2024 },
  { value: '+2.7%', label: 'Consumer prices', note: 'Inflation is back after decades near zero', source: 'Statistics Bureau, CPI', year: 2024 },
  { value: '67.8M', label: 'People employed', note: 'Employment rate of 15\u201364 year-olds: 79.2%', source: 'Labour Force Survey / OECD', year: 2024 },
  { value: '\u00a51,055', label: 'Average minimum wage', note: 'Per hour, national weighted average from Oct 2024', source: 'MHLW', year: 2024 },
  { value: '\u00a54.60M', label: 'Average yearly salary', note: 'Private-sector employees, mean gross pay', source: 'National Tax Agency survey', year: 2023 },
  { value: '1,607 hrs', label: 'Hours worked per year', note: 'Per worker \u2014 below the OECD average', source: 'OECD', year: 2023 },
  { value: '\u00a58.1T', label: 'Visitor spending', note: '36.87 million visitors \u2014 both all-time records', source: 'JNTO / Japan Tourism Agency', year: 2024 },
];

export const ECONOMY_FACTS = [
  { title: 'What Japan sells the world', text: 'Cars and car parts are the export engine (about \u00a517 trillion of motor vehicles alone), followed by semiconductors and electronic parts, semiconductor-making equipment and steel. Energy \u2014 LNG, coal and oil \u2014 dominates the import bill.' },
  { title: 'The shrinking-paycheck story is turning', text: 'Spring wage talks (shunt\u014d) delivered raises above 5% in both 2024 and 2025 \u2014 the largest in three decades \u2014 as firms compete for scarce workers in the tightest labour market in decades.' },
  { title: 'Women joined the workforce', text: 'The employment rate of women aged 15\u201364 reached about 78% in 2024, up from roughly 60% in 2000 \u2014 one of the biggest quiet changes in the economy, and a key reason total employment kept growing while the working-age population shrank.' },
];
