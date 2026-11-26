// Shared building blocks every section view uses: stat cards, fact cards, chart panels.
// Keeping these in one place means every figure on the site is presented the same way:
// big value, plain-English note, and its source and year underneath.

export function statCards(stats) {
  return `<div class="stat-grid">${stats.map((s) => `
    <article class="stat-card">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <p class="stat-note">${s.note}</p>
      <footer class="stat-source">${s.source} \u00b7 ${s.year}</footer>
    </article>`).join('')}</div>`;
}

export function factCards(facts) {
  return `<div class="fact-grid">${facts.map((f) => `
    <article class="fact-card">
      <h3>${f.title}</h3>
      <p>${f.text}</p>
    </article>`).join('')}</div>`;
}

export function panel(title, source, inner) {
  return `<section class="panel">
    <div class="panel-head"><h2>${title}</h2><span class="panel-source">${source}</span></div>
    ${inner}
  </section>`;
}

export function sectionHead(kicker, title, intro) {
  return `<div class="section-head">
    <p class="kicker">${kicker}</p>
    <h1>${title}</h1>
    <p class="intro">${intro}</p>
  </div>`;
}
