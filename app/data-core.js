// Core data for the overview page: headline indicators and the long population series.
// Every figure carries its source and year, as the site promises on every card.
// Sources: Statistics Bureau of Japan (MIC), Cabinet Office, MHLW, JNTO, GSI.

export const HEADLINES = [
  { value: '123.8M', label: 'Population', note: 'Falling since the 2008 peak of 128.1M', source: 'Statistics Bureau estimate', year: 2024 },
  { value: '29.3%', label: 'Aged 65 or over', note: 'The highest share of any country on Earth', source: 'Statistics Bureau estimate', year: 2024 },
  { value: '87.1 yrs', label: 'Life expectancy, women', note: 'Men: 81.1 years — both among the world\u2019s longest', source: 'MHLW abridged life tables', year: 2023 },
  { value: '\u00a5609T', label: 'Nominal GDP', note: 'About $4.0 trillion — the world\u2019s 4th-largest economy', source: 'Cabinet Office, National Accounts', year: 2024 },
  { value: '2.5%', label: 'Unemployment rate', note: '67.8 million people in work', source: 'Statistics Bureau, Labour Force Survey', year: 2024 },
  { value: '36.9M', label: 'Visitors from abroad', note: 'An all-time record, spending \u00a58.1 trillion', source: 'JNTO / Japan Tourism Agency', year: 2024 },
  { value: '14,125', label: 'Islands', note: 'A digital recount found far more than the old figure of 6,852', source: 'Geospatial Information Authority', year: 2023 },
  { value: '377,975', label: 'Land area, km\u00b2', note: 'Roughly the size of Germany — 67% of it forested', source: 'Geospatial Information Authority', year: 2024 },
];

// Total population, millions, census years plus the 2008 peak and the 2024 estimate.
export const POPULATION_TREND = {
  source: 'Statistics Bureau, Population Census & annual estimates',
  points: [
    [1920, 56.0], [1930, 64.5], [1940, 73.1], [1950, 83.2], [1960, 94.3],
    [1970, 104.7], [1980, 117.1], [1990, 123.6], [2000, 126.9], [2008, 128.1],
    [2010, 128.1], [2015, 127.1], [2020, 126.1], [2024, 123.8],
  ],
};

// Age structure, % of total population. The story of a society growing older.
export const AGE_SHARES = {
  source: 'Statistics Bureau, Population Census & 2024 estimate',
  rows: [
    { year: 1970, young: 24.0, working: 68.9, senior: 7.1 },
    { year: 1990, young: 18.2, working: 69.7, senior: 12.1 },
    { year: 2010, young: 13.2, working: 63.8, senior: 23.0 },
    { year: 2024, young: 11.2, working: 59.5, senior: 29.3 },
  ],
};

export const OVERVIEW_FACTS = [
  { title: 'A peak already 16 years past', text: 'Japan\u2019s population topped out at 128.08 million in 2008 and has fallen every year since. The 2024 estimate, 123.80 million, is roughly the population of 1989 \u2014 with a completely different age shape.' },
  { title: 'One in three is nearly there', text: 'People aged 65+ numbered 36.2 million in 2024. Centenarians passed 95,000 in September 2024 \u2014 95,119 people, the 54th consecutive record, and nearly nine in ten of them women. (MHLW, 2024)' },
  { title: 'Where everyone lives', text: 'The Greater Tokyo Area alone holds about 36.9 million people \u2014 more than the whole of Malaysia. The three great metro areas (Tokyo, Ch\u016bs\u014d/Osaka-Kansai and Nagoya) hold just over half the nation on a fraction of its land.' },
];
