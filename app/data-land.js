// Land & nature: area, islands, forests, mountains, climate, energy.
// Sources: GSI, Forestry Agency, JMA, METI/ANRE, MLIT.

export const ENERGY_MIX = {
  source: 'Agency for Natural Resources and Energy, FY2023 electricity mix',
  slices: [
    { label: 'LNG (gas)', value: 32.9, color: '#3e6fa3' },
    { label: 'Coal', value: 28.3, color: '#5a5148' },
    { label: 'Solar', value: 9.8, color: '#e0a51f' },
    { label: 'Hydro', value: 7.6, color: '#4d9db8' },
    { label: 'Nuclear', value: 8.5, color: '#8a6fc9' },
    { label: 'Oil etc.', value: 7.4, color: '#9c4a2f' },
    { label: 'Wind, geothermal, biomass & other renewables', value: 5.5, color: '#5d9c6e' },
  ],
};

export const LAND_STATS = [
  { value: '14,125', label: 'Islands', note: 'Recounted digitally in 2023 \u2014 the old official figure was 6,852', source: 'Geospatial Information Authority', year: 2023 },
  { value: '67%', label: 'Covered by forest', note: '25.1 million hectares \u2014 among the highest shares in the developed world', source: 'Forestry Agency', year: 2023 },
  { value: '3,776 m', label: 'Mt Fuji', note: 'The highest point; 111 active volcanoes stand across the arc', source: 'GSI / JMA', year: 2024 },
  { value: '47', label: 'Prefectures', note: 'From Hokkaid\u014d (83,424 km\u00b2) to Kagawa (1,877 km\u00b2)', source: 'GSI', year: 2024 },
  { value: '670 km\u00b2', label: 'Lake Biwa', note: 'The largest lake \u2014 about the size of Singapore', source: 'MLIT', year: 2024 },
  { value: '367 km', label: 'Shinano River', note: 'The longest river, flowing to the Sea of Japan at Niigata', source: 'MLIT', year: 2024 },
  { value: '1,718 mm', label: 'Rain in a year', note: 'Roughly double the world average of about 880 mm', source: 'JMA climate normals', year: 2020 },
  { value: '\u22481,500', label: 'Earthquakes felt per year', note: 'About a fifth of the world\u2019s magnitude-6+ quakes happen in or near Japan', source: 'JMA', year: 2024 },
];

export const LAND_FACTS = [
  { title: 'Four plates meet here', text: 'Japan sits where the Pacific, Philippine Sea, Eurasian and North American plates collide. That geology built the mountains, the hot springs (about 27,000 sources) and the volcanoes \u2014 and it shakes the country roughly 1,500 times a year with tremors people can feel.' },
  { title: 'A country of coasts', text: 'The coastline runs about 35,000 km \u2014 among the longest in the world relative to land area. No point in Japan is more than about 115 km from the sea, which is why seafood, ports and typhoons shape daily life.' },
  { title: 'Snow country', text: 'The Sea of Japan side receives some of the heaviest snowfall on Earth for inhabited places: Aomori City averages about 6.7 metres a season, and Sukayu has recorded seasonal totals above 17 metres. (JMA normals)' },
];

export const CLIMATE = {
  source: 'JMA 1991\u20132020 climate normals, average annual temperature \u00b0C',
  rows: [
    { label: 'Sapporo', value: 9.2 },
    { label: 'Sendai', value: 12.8 },
    { label: 'Tokyo', value: 16.5 },
    { label: 'Nagoya', value: 16.0 },
    { label: 'Osaka', value: 17.0 },
    { label: 'Fukuoka', value: 17.3 },
    { label: 'Naha', value: 23.3 },
  ],
};
