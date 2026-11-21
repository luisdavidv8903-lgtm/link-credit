# Link-Credit

Sitio educativo en español sobre crédito personal y empresarial (https://link-credit.com). Estático, sin build en producción: Cloudflare Pages sirve la raíz del repositorio.

## Editar contenido
Las páginas se generan con Node (sin dependencias):

```
node tools/build.mjs      # regenera index.html, carpetas, sitemap.xml y robots.txt
node tools/calc.test.mjs  # prueba la lógica de la calculadora
node tools/check.mjs      # enlaces internos, SEO básico, enlaces externos verificados
```

- Contenido: `tools/pages.mjs` y `tools/articles.mjs`. Fuentes oficiales: `tools/site.mjs` (solo URLs verificadas).
- No se tocan `admin.html` ni `chambeando/`.
- `_headers` define cabeceras; la CSP estricta solo se aplica a las páginas nuevas.

## Reglas del sitio
Solo educación: sin reparación de crédito, sin venta de líneas/tradelines, sin formularios de datos sensibles, sin promesas de puntaje o aprobación, sin herramientas de seguimiento.

## Rollback
Pages → proyecto `link-credit` → Deployments → elegir el despliegue anterior → "Rollback". Respaldo en Git: commit `0862270` (rama `main` antes del rediseño).
