// node tools/check.mjs — revisa el sitio generado: enlaces internos, SEO básico, enlaces externos conocidos, estilos en línea.
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "./pages.mjs";
import { SRC, SITE } from "./site.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const known = new Set(Object.values(SRC).map((v) => v[1]));
const extra = new Set(["https://www.annualcreditreport.com/"]); // sitio oficial usado en el texto
const errors = [];
const err = (m) => errors.push(m);
const fileFor = (p) => (p.endsWith("/") ? join(root, p, "index.html") : join(root, p));
const titles = new Set(), descs = new Set();
let links = 0;

for (const p of pages) {
  const f = fileFor(p.path);
  if (!existsSync(f)) { err(`falta archivo ${p.path}`); continue; }
  const h = readFileSync(f, "utf8");
  const t = (h.match(/<title>(.*?)<\/title>/) || [])[1];
  const d = (h.match(/<meta name="description" content="(.*?)">/) || [])[1];
  if (!t || t.length > 70) err(`${p.path}: título ausente o >70 (${t && t.length})`);
  if (!d || d.length < 70 || d.length > 200) err(`${p.path}: descripción fuera de 70–200 (${d && d.length})`);
  if (titles.has(t)) err(`${p.path}: título duplicado`); titles.add(t);
  if (descs.has(d)) err(`${p.path}: descripción duplicada`); descs.add(d);
  if (!h.includes(`<link rel="canonical" href="${SITE.origin}${p.path}">`)) err(`${p.path}: canonical`);
  if (!h.includes('property="og:title"')) err(`${p.path}: og:title`);
  if ((h.match(/<h1[ >]/g) || []).length !== 1) err(`${p.path}: debe haber exactamente un h1`);
  if (!h.includes('<html lang="es">')) err(`${p.path}: lang`);
  if (/ style="/.test(h)) err(`${p.path}: estilo en línea (rompe CSP)`);
  if (/<img(?![^>]*\balt=)/.test(h)) err(`${p.path}: img sin alt`);
  for (const m of h.matchAll(/(?:href|src)="([^"#]*)(#[^"]*)?"/g)) {
    const u = m[1]; links++;
    if (!u || u.startsWith("mailto:") || u.startsWith("tel:")) continue;
    if (u.startsWith("http")) { if (!known.has(u) && !extra.has(u) && !u.startsWith(SITE.origin)) err(`${p.path}: enlace externo no verificado ${u}`); continue; }
    if (!u.startsWith("/")) { err(`${p.path}: enlace relativo ${u}`); continue; }
    const target = u.endsWith("/") ? join(root, u, "index.html") : join(root, u);
    if (!existsSync(target)) err(`${p.path}: enlace roto ${u}`);
  }
  for (const m of h.matchAll(/href="#([^"]+)"/g)) if (!h.includes(`id="${m[1]}"`)) err(`${p.path}: ancla rota #${m[1]}`);
}
const sm = readFileSync(join(root, "sitemap.xml"), "utf8");
for (const p of pages) if (!p.noindex && !p.notFound && !sm.includes(`${SITE.origin}${p.path}</loc>`)) err(`sitemap: falta ${p.path}`);
for (const f of ["admin.html", "chambeando/privacy/index.html"]) if (!existsSync(join(root, f))) err(`se perdió ${f}`);

console.log(`páginas: ${pages.length}, enlaces revisados: ${links}`);
if (errors.length) { console.log(errors.join("\n")); process.exit(1); }
console.log("check OK");
