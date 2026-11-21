// Genera las páginas estáticas de Link-Credit. Sin dependencias: node tools/build.mjs
// Salida: carpetas con index.html, sitemap.xml y robots.txt en la raíz del repo.
// No toca admin.html ni chambeando/ (se conservan tal cual).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "./pages.mjs";
import { SITE } from "./site.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

const NAV = [
  ["/", "Inicio"],
  ["/credito-personal/", "Crédito personal"],
  ["/credito-empresarial/", "Crédito empresarial"],
  ["/herramientas/utilizacion-crediticia/", "Calculadora"],
  ["/guias/", "Explorar guías", "navbtn"],
];

function navLinks(current) {
  return NAV.map(([href, label, cls]) => {
    const on = current === href || (href !== "/" && current.startsWith(href.split("/").slice(0, 2).join("/") + "/") && href.split("/")[1] === current.split("/")[1]);
    return `<a href="${href}"${cls ? ` class="${cls}"` : ""}${on && !cls ? ' aria-current="page"' : ""}>${label}</a>`;
  }).join("");
}

function layout(p) {
  const url = SITE.origin + p.path;
  const robots = p.noindex ? '<meta name="robots" content="noindex,nofollow">' : "";
  const gsc = p.home && SITE.gsc ? `<meta name="google-site-verification" content="${SITE.gsc}">` : "";
  const ld = p.jsonld ? `<script type="application/ld+json">${JSON.stringify(p.jsonld)}</script>` : "";
  const crumbs = p.crumbs
    ? `<nav class="crumbs" aria-label="Ruta de navegación">${p.crumbs.map(([h, l]) => `<a href="${h}">${l}</a>`).join(" › ")} › <span>${esc(p.crumbTitle || p.title)}</span></nav>`
    : "";
  const head = p.home
    ? ""
    : `<header class="page-head"><div class="wrap">${crumbs}<h1>${p.h1 || esc(p.title)}</h1>${p.lead ? `<p>${p.lead}</p>` : ""}</div></header>`;
  const extraScripts = (p.scripts || []).map((s) => `<script src="${s}" defer></script>`).join("");
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.fullTitle || p.title + " | Link-Credit")}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${url}">
${robots}
${gsc}
<meta property="og:site_name" content="Link-Credit">
<meta property="og:type" content="${p.article ? "article" : "website"}">
<meta property="og:locale" content="es_US">
<meta property="og:title" content="${esc(p.fullTitle || p.title + " | Link-Credit")}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.origin}/assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Link-Credit: entiende tu crédito, decide con criterio. Educación financiera en español.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${SITE.origin}/assets/og-image.png">
<meta name="theme-color" content="#071e3d">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/styles.css">
${ld}
</head>
<body>
<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="/" aria-label="Link-Credit, inicio"><span class="mark" aria-hidden="true">↗</span><span>link-credit<small>EDUCACIÓN FINANCIERA</small></span></a>
    <nav class="nav" aria-label="Principal">${navLinks(p.path)}</nav>
    <details class="menu">
      <summary>Menú</summary>
      <nav class="menu-list" aria-label="Principal (móvil)">${NAV.map(([h, l]) => `<a href="${h}">${l}</a>`).join("")}</nav>
    </details>
  </div>
</header>
<main id="contenido">
${head}
${p.body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <h2>Link-Credit</h2>
        <p>Educación financiera práctica en español sobre crédito personal y empresarial. Contenido informativo: no somos un banco, un prestamista, una agencia de informes crediticios ni una empresa de reparación de crédito.</p>
      </div>
      <div>
        <h2>Explora</h2>
        <ul>
          <li><a href="/credito-personal/">Crédito personal</a></li>
          <li><a href="/credito-empresarial/">Crédito empresarial</a></li>
          <li><a href="/guias/">Guías</a></li>
          <li><a href="/herramientas/utilizacion-crediticia/">Calculadora de utilización</a></li>
        </ul>
      </div>
      <div>
        <h2>Información</h2>
        <ul>
          <li><a href="/sobre-link-credit/">Sobre Link-Credit</a></li>
          <li><a href="/contacto/">Contacto</a></li>
          <li><a href="/aviso-educativo/">Aviso educativo</a></li>
          <li><a href="/privacidad/">Política de privacidad</a></li>
          <li><a href="/terminos/">Términos de uso</a></li>
        </ul>
      </div>
    </div>
    <p class="legal-line">© 2026 Link-Credit, operado por ${SITE.owner}, Florida. Solo con fines educativos; no es asesoría financiera, legal ni fiscal.</p>
  </div>
</footer>
${extraScripts}
</body>
</html>
`;
}

const written = [];
for (const p of pages) {
  const out = join(root, p.path.replace(/^\//, ""), p.path.endsWith("/") ? "index.html" : "");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, layout(p));
  written.push(p);
}

// sitemap.xml: solo páginas indexables
const urls = written.filter((p) => !p.noindex && !p.notFound);
writeFileSync(
  join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `  <url><loc>${SITE.origin}${p.path}</loc><lastmod>${p.updated || SITE.updated}</lastmod></url>`).join("\n")}
</urlset>
`
);

writeFileSync(
  join(root, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${SITE.origin}/sitemap.xml
`
);

console.log(`OK: ${written.length} páginas, ${urls.length} en sitemap`);
