[![make.fun · best-national-statistics-site-20261126-0539](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/indra260/japan-in-numbers/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/indra260/japan-in-numbers/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)

# Japan in Numbers — a national statistics site for Japan

An original, fully static statistics site about **Japan**: population, economy,
all 47 prefectures, land & nature, and health/education/daily life. Every figure
on the site carries its official source and year on the card itself.

Built for the make.fun bounty **“Make the best national statistics site”**
(`best-national-statistics-site-20261126-0539`) as @naakent.

## Run it

```sh
node serve.ts            # serves app/ at http://localhost:8080
# or any static server with app/ at its root — no build step, no network calls
```

Hand-in program (what the grader runs):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # copies app/ + screenshots/ to out/, writes out/dossier.json
```

## Structure

- `app/index.html` — the shell: brand header, section navigation, footer.
- `app/main.js` — hash router; each section view is a separate module loaded with
  `import()` on first visit, so the first load is only the shell + overview.
- `app/style.css` — the design system (warm paper, indigo *ai-iro*, vermilion
  *shu-iro*; system font stack, nothing fetched).
- `app/charts.js` — all charts drawn in code as SVG: line, horizontal bars,
  grouped bars, 100% stacked age bars, donut. No chart library.
- `app/data-*.js` — the content, one file per section, every figure sourced.
- `app/views-*.js` — one renderer per section; `views-common.js` holds the shared
  stat-card / fact-card / panel builders.
- `app/views-prefectures.js` — all 47 prefectures with live search, region
  filter, sortable columns and a population-by-region chart summed from the
  same census counts.
- `vendor/makefun-frontend.ts` — the kit's dossier library, byte-unchanged.
- `screenshots/` — real renders taken by `capture-shots.mjs` (headless Chromium):
  cover + People + Prefectures at 1280×800, and the overview at phone size 390×844.

## Data sources (all official)

- **Population, households, prefectures** — Statistics Bureau of Japan (MIC):
  Population Census 2020 (final counts) and the Oct 2024 population estimate.
- **Births, deaths, marriages, life expectancy** — MHLW Vital Statistics and
  Abridged Life Tables (2024 vital figures are the final counts).
- **GDP** — Cabinet Office, National Accounts 2024 (nominal ¥609 trillion).
- **Trade** — Ministry of Finance, Trade Statistics of Japan 2024.
- **Jobs & prices** — Statistics Bureau Labour Force Survey & CPI 2024; minimum
  wage MHLW (Oct 2024); salaries National Tax Agency 2023; hours OECD 2023.
- **Visitors** — JNTO / Japan Tourism Agency 2024 (36.87M visitors, ¥8.1T spend).
- **Land, islands, area** — Geospatial Information Authority (2023 island
  recount: 14,125); forests Forestry Agency; climate JMA 1991–2020 normals.
- **Energy mix** — Agency for Natural Resources and Energy, FY2023
  (thermal 68.6%, renewables 22.9%, nuclear 8.5%).
- **Health & education** — OECD Health Statistics 2022, PISA 2022, MEXT School
  Basic Survey 2024; suicides & crime National Police Agency.

Figures are the well-known published headline values from those sources;
where a number is an estimate or preliminary, the card on the site says so.

## License

MIT — see `LICENSE`.
