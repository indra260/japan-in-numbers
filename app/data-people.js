// People & society: births, deaths, life expectancy, households, foreign residents.
// Sources: MHLW Vital Statistics, Statistics Bureau, Immigration Services Agency.

export const BIRTHS_DEATHS = {
  source: 'MHLW, Vital Statistics (2024 figures preliminary)',
  // thousands of people
  points: [
    { year: 1973, births: 2092, deaths: 709 },
    { year: 1990, births: 1222, deaths: 820 },
    { year: 2000, births: 1191, deaths: 962 },
    { year: 2010, births: 1071, deaths: 1197 },
    { year: 2016, births: 977, deaths: 1310 },
    { year: 2020, births: 841, deaths: 1372 },
    { year: 2022, births: 771, deaths: 1570 },
    { year: 2023, births: 727, deaths: 1576 },
    { year: 2024, births: 686, deaths: 1605 },
  ],
};

export const LIFE_EXPECTANCY = {
  source: 'MHLW, Abridged Life Tables',
  points: [
    { year: 1970, women: 74.7, men: 69.3 },
    { year: 1990, women: 81.9, men: 75.9 },
    { year: 2000, women: 84.6, men: 77.7 },
    { year: 2010, women: 86.3, men: 79.6 },
    { year: 2023, women: 87.1, men: 81.1 },
  ],
};

export const PEOPLE_STATS = [
  { value: '1.15', label: 'Children per woman (TFR)', note: 'Down from 1.20 in 2023 \u2014 a record low', source: 'MHLW, Vital Statistics', year: 2024 },
  { value: '686,061', label: 'Babies born', note: 'First year under 700,000; deaths were 1,605,298', source: 'MHLW preliminary', year: 2024 },
  { value: '49.9 yrs', label: 'Median age', note: 'Half the population is older than this', source: 'Statistics Bureau estimate', year: 2024 },
  { value: '55.7M', label: 'Households', note: '38% are one-person households; average size 2.21 people', source: 'Population Census', year: 2020 },
  { value: '3.77M', label: 'Foreign residents', note: 'A record high \u2014 about 3% of the population', source: 'Immigration Services Agency', year: 2024 },
  { value: '95,119', label: 'Centenarians', note: '54th straight annual record; 88% are women', source: 'MHLW', year: 2024 },
  { value: '31.0 / 29.5', label: 'Age at first marriage', note: 'Men / women, years \u2014 both still edging later', source: 'MHLW, Vital Statistics', year: 2023 },
  { value: '\u2248500k', label: 'Marriages', note: '499,999 couples \u2014 the first increase in several years', source: 'MHLW preliminary', year: 2024 },
];

export const PEOPLE_FACTS = [
  { title: 'The crossover year was 2007', text: 'Deaths first outnumbered births in 2007 (excluding a one-off in 2005). In 2024 the natural decrease was about 919,000 people \u2014 the largest ever \u2014 like losing a city the size of Kyoto\u2019s core wards every year.' },
  { title: 'Where foreign residents live', text: 'Tokyo hosts about 738,000 foreign residents, then Aichi (\u2248318,000) and Osaka (\u2248317,000). The largest nationalities are Chinese (\u2248873,000), Korean (\u2248410,000) and Vietnamese (\u2248635,000). (ISA, end of 2024)' },
  { title: 'Living alone is the new normal', text: 'One-person households reached 21.2 million in the 2020 census \u2014 38.0% of all households and the single most common type, ahead of couples with children.' },
];
