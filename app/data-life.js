// Health, education & daily life.
// Sources: MHLW, OECD, MEXT, NPA, JFA, JVMA, PISA 2022 (OECD).

export const HEALTH_STATS = [
  { value: '87.1 / 81.1', label: 'Life expectancy, women / men', note: 'Years at birth \u2014 3rd and among the top worldwide', source: 'MHLW', year: 2023 },
  { value: '1.8', label: 'Infant deaths per 1,000 births', note: 'Among the lowest rates ever recorded anywhere', source: 'MHLW / OECD', year: 2022 },
  { value: '11.4%', label: 'Of GDP spent on health', note: 'Universal coverage since 1961; patients pay 10\u201330% at the window', source: 'OECD Health Statistics', year: 2022 },
  { value: '2.6', label: 'Doctors per 1,000 people', note: 'Fewer than the OECD average \u2014 but 12.6 hospital beds per 1,000, the most in the OECD', source: 'OECD', year: 2022 },
  { value: '20,320', label: 'Suicides', note: 'Down from a 2003 peak of 34,427; still a national priority', source: 'National Police Agency', year: 2024 },
  { value: '0.2', label: 'Homicides per 100,000', note: 'Among the lowest rates in the world', source: 'UNODC / NPA', year: 2022 },
];

export const EDUCATION_STATS = [
  { value: '59.1%', label: 'Advance to university', note: 'Of high-school graduates; ~87% enter some higher education', source: 'MEXT School Basic Survey', year: 2024 },
  { value: '536', label: 'PISA maths score', note: '5th in the world; science 547 (2nd), reading 516', source: 'OECD PISA', year: 2022 },
  { value: '9 yrs', label: 'Compulsory schooling', note: 'Six years elementary + three junior high, free at public schools', source: 'MEXT', year: 2024 },
  { value: '5.86M', label: 'Elementary pupils', note: 'Down from 11.9 million in 1980 as cohorts shrink', source: 'MEXT School Basic Survey', year: 2024 },
];

export const DAILY_LIFE = [
  { value: '\u224855,700', label: 'Convenience stores', note: 'Roughly one for every 2,200 people, most open 24 hours', source: 'Japan Franchise Association', year: 2024 },
  { value: '\u22483.9M', label: 'Vending machines', note: 'About one for every 32 people \u2014 drinks machines are half of them', source: 'JVMA', year: 2023 },
  { value: '26', label: 'UNESCO World Heritage sites', note: '21 cultural and 5 natural, from Himeji Castle to Yakushima', source: 'UNESCO / ACA', year: 2024 },
  { value: '125 g', label: 'Rice eaten per person per day', note: 'Half the 1962 level \u2014 bread and noodles took the rest', source: 'MAFF food balance sheets', year: 2023 },
  { value: '\u224890%', label: 'People own a smartphone', note: 'Yet cash and paper still thrive alongside the digital', source: 'MIC Communications Survey', year: 2024 },
  { value: '2,724 km', label: 'Shinkansen network', note: 'Bullet trains in service since 1964 with zero fatal derailments', source: 'MLIT / JR companies', year: 2024 },
];

export const LIFE_FACTS = [
  { title: 'Long lives, long retirements', text: 'A Japanese 65-year-old can expect about 25 more years (women) \u2014 so the country is redesigning work, pensions and cities around the \u201c100-year life\u201d. About 29% of people aged 65\u201369 are still in work, the highest share in the G7. (Statistics Bureau, 2024)' },
  { title: 'Schools are shrinking with the cohorts', text: 'Around 1,000 public schools close or merge in a typical recent year as villages run out of children; some are reborn as community centres, breweries and art spaces. University numbers hold up only because a record share of each smaller cohort now goes.' },
  { title: 'Safe streets, measured', text: 'Police recorded about 703,000 penal-code offences in 2023 \u2014 up from the 2021 low as street crime returned after the pandemic, but still less than half the 2002 peak of 2.85 million. Bicycle theft and shoplifting top the list; violent crime is rare. (NPA)' },
];
