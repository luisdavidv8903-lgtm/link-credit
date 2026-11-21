// Contenido de todas las páginas. Solo datos verificados (ver site.mjs). Sin cifras ni resultados inventados.
import { SITE, SRC } from "./site.mjs";
import { guides, personal, empresarial } from "./articles.mjs";

const D = SITE.updated;
const H = SITE.updatedHuman;
const wrap = (inner, cls = "") => `<section${cls ? ` class="${cls}"` : ""}><div class="wrap">${inner}</div></section>`;
const prose = (inner) => wrap(`<div class="prose">${inner}</div>`);
const mailto = `<a href="mailto:${SITE.email}">${SITE.email}</a>`;
const stamp = `<p class="meta">Última actualización: <time datetime="${D}">${H}</time>.</p>`;

/* ───────── Inicio ───────── */
const home = {
  path: "/",
  home: true,
  fullTitle: "Link-Credit | Entiende tu crédito. Decide con criterio.",
  title: "Link-Credit",
  description: "Educación financiera en español sobre crédito personal y empresarial: guías claras, una calculadora gratuita de utilización y fuentes oficiales. Sin promesas, sin préstamos, sin venta de servicios.",
  updated: D,
  jsonld: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Link-Credit",
    url: SITE.origin + "/",
    inLanguage: "es-US",
    description: "Educación financiera en español sobre crédito personal y empresarial.",
  },
  scripts: ["/assets/calc-core.js", "/assets/home-calc.js"],
  body: `
<section class="hero"><div class="wrap hero-in">
  <div>
    <span class="eyebrow"><i></i> INFORMACIÓN CLARA · EN ESPAÑOL</span>
    <h1>Entiende tu crédito.<br><em>Decide con criterio.</em></h1>
    <p>Aprende a fortalecer tu crédito personal y a construir el historial financiero de un negocio nuevo. Explicaciones prácticas, experiencias reales y herramientas gratuitas, sin promesas de aprobaciones ni resultados garantizados.</p>
    <div class="btns">
      <a class="btn btn-primary" href="/credito-empresarial/">Aprender crédito empresarial ↗</a>
      <a class="btn btn-ghost" href="/credito-personal/">Empezar por crédito personal</a>
    </div>
    <div class="hero-note">Educación financiera independiente. No somos un banco ni una agencia de crédito.</div>
  </div>
  <aside class="feature" aria-label="Ruta práctica para negocios nuevos">
    <div class="kicker">Ruta práctica para negocios nuevos</div>
    <h2>Una LLC nueva también necesita estrategia financiera.</h2>
    <div class="step"><div class="num">1</div><div><strong>Separar la actividad empresarial</strong><small>Identidad legal, cuentas y registros claros.</small></div></div>
    <div class="step"><div class="num">2</div><div><strong>Construir historial verificable</strong><small>Pagos responsables y proveedores que realmente reporten.</small></div></div>
    <div class="step"><div class="num">3</div><div><strong>Evaluar crédito con números</strong><small>Tasas, garantías personales, costos y flujo de caja.</small></div></div>
    <div class="step"><div class="num">4</div><div><strong>Proteger el capital</strong><small>No endeudarse únicamente por puntos o límites.</small></div></div>
  </aside>
</div></section>

<div class="sliver"><div class="wrap"><strong>La meta no es un número bonito: es una posición financiera más sólida.</strong><span>Guías fundamentadas en fuentes oficiales y experiencia práctica.</span></div></div>

${wrap(`
<div class="eyk">Aprende a tu ritmo</div>
<h2 class="section-title">Dos caminos. Una misma disciplina financiera.</h2>
<p class="section-lead">El historial de una persona y el de una empresa se relacionan, pero no son lo mismo. Aquí los analizamos por separado, sin atajos ni promesas.</p>
<div class="grid grid-2">
  <article class="tile"><div class="icon" aria-hidden="true">01</div><h3>Crédito personal</h3><p>Entiende tus reportes, qué influye en las puntuaciones y cómo evitar decisiones que encarezcan tus deudas.</p><ul class="chips"><li>Utilización</li><li>Historial de pagos</li><li>Consultas</li><li>Reportes</li></ul><a class="more" href="/credito-personal/">Ver crédito personal</a></article>
  <article class="tile"><div class="icon green" aria-hidden="true">02</div><h3>Crédito empresarial</h3><p>Qué cambia al abrir una LLC, cómo evaluar proveedores con términos de pago y por qué una aprobación no equivale a solvencia.</p><ul class="chips"><li>LLC nueva</li><li>D-U-N-S</li><li>Net terms</li><li>Flujo de caja</li></ul><a class="more" href="/credito-empresarial/">Ver crédito empresarial</a></article>
</div>`)}

${wrap(`
<div class="case">
  <div>
    <div class="eyk">Experiencia documentable</div>
    <h2 class="section-title">Lo que aprendí construyendo crédito con una empresa nueva.</h2>
    <p class="section-lead">Este proyecto nace de decisiones reales al organizar el crédito personal y empresarial. Compartimos los pasos útiles y también las limitaciones: algunas solicitudes se aprueban, otras no; los productos cambian y el resultado de cada persona puede ser diferente.</p>
    <p class="minor">No publicamos límites, puntuaciones, estados de cuenta ni datos de terceros sin autorización. Un caso personal no demuestra que otra persona vaya a obtener el mismo resultado.</p>
    <p><a class="btn btn-outline" href="/experiencia-real/">Leer los principios</a></p>
  </div>
  <div class="case-block"><h3>Principios que sí se pueden explicar</h3>
    <div class="case-row"><div class="check" aria-hidden="true">✓</div><div><b>Separar finanzas personales y comerciales</b><p>Cuenta bancaria empresarial, registros y control de gastos.</p></div></div>
    <div class="case-row"><div class="check" aria-hidden="true">✓</div><div><b>Comprobar quién reporta y dónde</b><p>Un proveedor «net terms» no siempre genera el historial esperado.</p></div></div>
    <div class="case-row"><div class="check" aria-hidden="true">✓</div><div><b>Evaluar ofertas sin obsesionarse con el límite</b><p>La tasa, el costo total y el capital disponible importan más.</p></div></div>
    <div class="case-row"><div class="check" aria-hidden="true">✓</div><div><b>Diferenciar crédito del negocio y garantía personal</b><p>Una empresa joven puede seguir dependiendo del perfil de su propietario.</p></div></div>
  </div>
</div>`, "band")}

${wrap(`
<div class="eyk">Biblioteca inicial</div>
<h2 class="section-title">Empieza con preguntas que realmente importan.</h2>
<p class="section-lead">Cada guía es un artículo original con fuentes oficiales y fecha de actualización.</p>
<div class="guide3">${guides.map((g, i) => `<article class="guide"><span class="label">${["Crédito personal", "Personal y empresarial", "Negocios nuevos", "Decisiones de crédito", "Límites y deuda"][i]}</span><h3><a href="${g.path}">${g.h1}</a></h3><p>${g.lead}</p><a class="more" href="${g.path}">Leer guía</a></article>`).join("")}
<article class="guide"><span class="label">Todas</span><h3><a href="/guias/">Ver la biblioteca completa</a></h3><p>Las cinco guías en un solo lugar, con la fecha de la última actualización.</p><a class="more" href="/guias/">Ir a las guías</a></article></div>`)}

${wrap(`
<div class="eyk">Herramienta gratuita</div>
<h2 class="section-title">Calcula la utilización de tus tarjetas</h2>
<p class="section-lead">Introduce tu saldo total y tu límite total. El cálculo ocurre únicamente en tu navegador, sin enviar ni almacenar información.</p>
<div class="qcalc">
  <form id="qform" novalidate>
    <strong>Utilización total estimada</strong>
    <div class="fg">
      <div class="field"><label for="qb">Saldo combinado (USD)</label><input id="qb" type="number" min="0" step="0.01" value="600" inputmode="decimal" autocomplete="off"></div>
      <div class="field"><label for="ql">Límite combinado (USD)</label><input id="ql" type="number" min="0.01" step="0.01" value="3000" inputmode="decimal" autocomplete="off"></div>
    </div>
    <p class="minor">Fórmula: (saldo total ÷ límite total) × 100. No predice tu puntuación ni sustituye las reglas de un prestamista. Para varias tarjetas, usa la <a href="/herramientas/utilizacion-crediticia/">calculadora completa</a>.</p>
  </form>
  <div class="qres"><span>Porcentaje calculado</span><output class="big" id="qpct" for="qb ql" aria-live="polite">20 %</output><span id="qhelp">Una referencia matemática, no una garantía de puntaje.</span></div>
</div>`, "band")}

${wrap(`
<div class="eyk">Fuentes y transparencia</div>
<h2 class="section-title">Preferimos fuentes verificables.</h2>
<p class="section-lead">Los consejos generales deben distinguirse de las experiencias personales, los programas de tarjetas cambian y una buena puntuación no garantiza una aprobación.</p>
<p class="source-line">Fuentes de referencia: <a href="${SRC.cfpbTools[1]}" rel="noopener" target="_blank">CFPB</a> · <a href="${SRC.ftcScams[1]}" rel="noopener" target="_blank">FTC</a> · <a href="https://www.sba.gov/" rel="noopener" target="_blank">SBA</a> · <a href="https://www.fdic.gov/" rel="noopener" target="_blank">FDIC</a></p>
<p class="minor">Link-Credit no está afiliado a la CFPB, la FTC, la SBA ni la FDIC. Más en el <a href="/aviso-educativo/">aviso educativo</a>.</p>`)}
`,
};

/* ───────── Experiencia real ───────── */
const experiencia = {
  path: "/experiencia-real/",
  title: "Experiencia: crédito con una empresa nueva",
  h1: "Lo que aprendí construyendo crédito empresarial con una LLC nueva",
  lead: "Principios que se pueden explicar, límites claros y nada de promesas.",
  description: "Principios aprendidos al organizar el crédito personal y empresarial de una LLC nueva: separar finanzas, comprobar quién reporta, evaluar ofertas y entender la garantía personal.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  crumbTitle: "Experiencia real",
  body: prose(`${stamp}
<p>Este proyecto nace de decisiones reales al organizar el crédito personal y empresarial de una empresa nueva. Aquí compartimos los principios útiles y también las limitaciones: algunas solicitudes se aprueban, otras no; los productos cambian y el resultado de cada persona puede ser diferente.</p>
<div class="info"><strong>Qué no publicamos.</strong> Límites, puntuaciones, saldos, estados de cuenta, documentos ni datos de terceros, sin autorización. Un caso personal no demuestra que otra persona vaya a obtener el mismo resultado.</div>
<h2>Principios que sí se pueden explicar</h2>
<h3>1. Separar finanzas personales y comerciales</h3>
<p>Una cuenta bancaria empresarial, registros ordenados y control de gastos hacen visible lo que pasa en el negocio y evitan confusiones. Detalle en la guía de <a href="/guias/perfil-crediticio-llc-nueva/">primeros pasos para una LLC</a>.</p>
<h3>2. Comprobar quién reporta y dónde</h3>
<p>Un proveedor con términos de pago («net terms») no siempre genera el historial que esperas: pregunta si reporta a algún buró comercial antes de contar con ello.</p>
<h3>3. Evaluar ofertas sin obsesionarse con el límite</h3>
<p>La tasa, el costo total y el capital disponible importan más que el número del límite. Usa la lista de <a href="/guias/evaluar-tarjeta-empresarial/">cómo evaluar una tarjeta empresarial</a>.</p>
<h3>4. Diferenciar el crédito del negocio de la garantía personal</h3>
<p>Una empresa joven puede seguir dependiendo del perfil de su propietario. Entiende <a href="/guias/credito-personal-vs-empresarial/">qué responde la empresa y qué respondes tú</a>.</p>
<h2>Y mientras tanto</h2>
<p>Seguiremos añadiendo aprendizajes solo cuando podamos sostenerlos con hechos o con fuentes oficiales. Para el panorama completo, empieza por la <a href="/credito-empresarial/">guía de crédito empresarial</a>.</p>
<div class="note"><strong>Advertencia.</strong> Experiencia personal no es asesoría financiera, legal ni fiscal y no garantiza resultados para nadie. Consulta el <a href="/aviso-educativo/">aviso educativo</a>.</div>`),
};

/* ───────── Calculadora ───────── */
const calculadora = {
  path: "/herramientas/utilizacion-crediticia/",
  title: "Calculadora de utilización crediticia",
  h1: "Calculadora de utilización crediticia",
  lead: "Calcula qué porcentaje de tu límite de crédito estás usando. Gratis y sin guardar nada.",
  description: "Calculadora gratuita de utilización crediticia: suma saldos y límites de tus tarjetas y obtén el porcentaje. Funciona en tu navegador, no guarda ni envía datos y no predice puntajes.",
  updated: D,
  scripts: ["/assets/calc-core.js", "/assets/calc.js"],
  crumbs: [["/", "Inicio"], ["/guias/", "Guías"]],
  crumbTitle: "Calculadora de utilización",
  jsonld: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de utilización crediticia",
    url: SITE.origin + "/herramientas/utilizacion-crediticia/",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Cualquiera con navegador web",
    inLanguage: "es-US",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  body: wrap(`
<div class="prose mb26">
  <p><strong>Utilización = saldo total ÷ límite total × 100.</strong> Escribe el saldo y el límite de cada tarjeta o línea revolvente.</p>
  <div class="info"><strong>Privacidad:</strong> el cálculo ocurre en tu navegador. Lo que escribes no se envía, no se guarda y no se usa para ningún otro fin. Esta página no usa cookies de seguimiento.</div>
</div>
<noscript><p class="note">Esta calculadora necesita JavaScript. Puedes calcular a mano: suma tus saldos, suma tus límites, divide el primer total entre el segundo y multiplica por 100.</p></noscript>
<form id="calc-form" class="calc" novalidate>
  <fieldset>
    <legend>Tus tarjetas o líneas de crédito</legend>
    <div id="rows"></div>
  </fieldset>
  <div class="calc-actions">
    <button type="button" id="add" class="btn btn-outline">+ Agregar tarjeta</button>
    <button type="submit" class="btn btn-primary">Calcular</button>
    <button type="button" id="clear" class="btn btn-outline">Borrar todo</button>
  </div>
  <p id="calc-error" class="error hidden" role="alert"></p>
  <div id="result" class="result hidden" aria-live="polite">
    <div class="big" id="pct">0 %</div>
    <p class="m-top6"><strong>Nivel de uso:</strong> <span id="band"></span></p>
    <div class="gauge" id="bar-box" role="progressbar" aria-label="Utilización" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i id="bar"></i></div>
    <div class="scale" aria-hidden="true"><span>0 %</span><span>30 %</span><span>100 %</span></div>
    <div class="stat-grid">
      <div class="stat"><b id="tb">$0</b><span>Saldo total</span></div>
      <div class="stat"><b id="tl">$0</b><span>Límite total</span></div>
      <div class="stat"><b id="nc">0</b><span>Cuentas</span></div>
    </div>
    <p id="hint" class="mt16"></p>
  </div>
</form>
<div class="prose">
  <div class="note"><strong>Qué NO hace esta herramienta.</strong> No predice tu puntaje, no dice si te aprobarán un crédito y no sustituye el consejo de un profesional. El 30 % es una referencia práctica, no una regla oficial. Más contexto: <a href="/guias/utilizacion-crediticia/">cómo interpretar la utilización crediticia</a>.</div>
  <p class="meta">Última actualización: <time datetime="${D}">${H}</time>.</p>
</div>`),
};

/* ───────── Índice de guías ───────── */
const guiasIndex = {
  path: "/guias/",
  title: "Guías de crédito personal y empresarial",
  h1: "Guías de crédito",
  lead: "Cinco guías originales en español, con fuentes oficiales y fecha de actualización.",
  description: "Guías educativas de crédito en español: utilización crediticia, crédito personal vs. empresarial, perfil crediticio de una LLC, tarjetas empresariales y aumentos de límite.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  crumbTitle: "Guías",
  body: wrap(`
<ul class="glist">${guides.map((g) => `<li class="card"><h3><a href="${g.path}">${g.h1}</a></h3><p>${g.lead}</p><p class="meta m0">Actualizada el <time datetime="${D}">${H}</time></p></li>`).join("")}</ul>
<p class="meta mt24">También: <a href="/credito-personal/">Crédito personal</a> · <a href="/credito-empresarial/">Crédito empresarial</a> · <a href="/herramientas/utilizacion-crediticia/">Calculadora</a></p>`),
};

/* ───────── Sobre ───────── */
const sobre = {
  path: "/sobre-link-credit/",
  title: "Sobre Link-Credit",
  h1: "Sobre Link-Credit",
  lead: "Educación financiera en español, con límites claros sobre lo que hacemos y lo que no.",
  description: "Quiénes somos y qué hace Link-Credit: un sitio educativo sobre crédito personal y empresarial, operado por DELIVERYLINK LLC en Florida. No somos prestamista ni empresa de reparación de crédito.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  crumbTitle: "Sobre Link-Credit",
  body: prose(`${stamp}
<h2>Qué es este sitio</h2>
<p>Link-Credit es un sitio informativo que explica, en español, cómo funcionan el crédito personal y el crédito empresarial. Nuestro objetivo es que entiendas los conceptos y los riesgos antes de decidir.</p>
<h2>Quién lo opera</h2>
<p>Link-Credit es operado por ${SITE.owner}, una compañía de responsabilidad limitada de Florida, Estados Unidos.</p>
<h2>Qué no somos</h2>
<ul>
<li>No somos un banco, un prestamista ni un corredor de préstamos.</li>
<li>No somos una agencia de informes crediticios.</li>
<li>No somos una empresa de reparación de crédito ni de "servicios de crédito" en el sentido de la ley.</li>
<li>No somos asesores financieros, abogados ni contadores.</li>
</ul>
<h2>Cómo trabajamos</h2>
<ul>
<li>Escribimos contenido original y lo respaldamos con fuentes oficiales y públicas.</li>
<li>Mostramos la fecha de la última actualización.</li>
<li>No inventamos resultados, testimonios ni credenciales.</li>
<li>No pedimos datos sensibles (Seguro Social, cuentas bancarias, contraseñas) en este sitio.</li>
</ul>
<p>Lee también el <a href="/aviso-educativo/">aviso educativo</a> y la <a href="/contacto/">página de contacto</a>.</p>`),
};

/* ───────── Contacto ───────── */
const contacto = {
  path: "/contacto/",
  title: "Contacto",
  h1: "Contacto",
  lead: "Escríbenos para corregir un dato, sugerir un tema o hacer una pregunta sobre el sitio.",
  description: "Cómo contactar a Link-Credit: correo y teléfono comercial. Antes de escribir, no envíes datos sensibles; no ofrecemos asesoría personalizada.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  crumbTitle: "Contacto",
  body: prose(`${stamp}
<h2>Datos de contacto</h2>
<ul>
<li><strong>Correo:</strong> ${mailto}</li>
<li><strong>Teléfono comercial:</strong> <a href="tel:${SITE.phoneTel}">${SITE.phone}</a></li>
<li><strong>Operado por:</strong> ${SITE.owner}, Florida, EE. UU.</li>
</ul>
<h2>Antes de escribir</h2>
<div class="note"><strong>No envíes datos sensibles.</strong> Por correo o teléfono no pidas ni envíes tu número de Seguro Social, números de cuenta o tarjeta, contraseñas ni documentos personales. No los necesitamos.</div>
<ul>
<li>Respondemos preguntas sobre el contenido del sitio y recibimos correcciones.</li>
<li>No damos asesoría de crédito, legal ni fiscal personalizada.</li>
<li>No tramitamos solicitudes de préstamos ni tarjetas.</li>
</ul>
<p>Si necesitas ayuda con una deuda o un error en tu informe, consulta las <a href="${SRC.cfpbTools[1]}" rel="noopener" target="_blank">herramientas de la CFPB</a> o a un profesional con licencia.</p>`),
};

/* ───────── Privacidad ───────── */
const privacidad = {
  path: "/privacidad/",
  title: "Política de privacidad",
  h1: "Política de privacidad",
  lead: "Qué datos trata este sitio (casi ninguno) y cómo contactarnos.",
  description: "Política de privacidad de Link-Credit: no pedimos datos sensibles, no usamos herramientas de seguimiento ni publicidad, y la calculadora funciona solo en tu navegador.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  crumbTitle: "Privacidad",
  body: prose(`${stamp}
<h2>Resumen</h2>
<p>Este sitio es informativo. No tiene cuentas de usuario, formularios de solicitud ni pagos, y no pide datos sensibles.</p>
<h2>La calculadora</h2>
<p>Los números que escribes en la calculadora se procesan únicamente en tu navegador. No se envían a nuestros servidores, no se guardan en cookies ni en el almacenamiento del navegador y no se comparten con terceros.</p>
<h2>Seguimiento y publicidad</h2>
<p>No usamos herramientas de analítica, píxeles de publicidad ni cookies de seguimiento de terceros.</p>
<h2>Registros técnicos</h2>
<p>Como cualquier sitio web, el servicio que lo aloja (Cloudflare) puede procesar datos técnicos como la dirección IP y el tipo de navegador para entregar las páginas y proteger el servicio. Consulta la política de privacidad de Cloudflare para más información.</p>
<h2>Si nos escribes</h2>
<p>Si nos envías un correo, usaremos tus datos solo para responderte. No los vendemos ni los compartimos con fines de publicidad. Te pedimos no enviar datos sensibles; si lo haces por error, avísanos y lo eliminaremos.</p>
<h2>Enlaces externos</h2>
<p>Las guías enlazan a sitios de terceros (por ejemplo, la CFPB o la FTC). Esos sitios tienen sus propias políticas.</p>
<h2>Contacto</h2>
<p>Para preguntas sobre privacidad: ${mailto}.</p>`),
};

/* ───────── Términos ───────── */
const terminos = {
  path: "/terminos/",
  title: "Términos de uso",
  h1: "Términos de uso",
  lead: "Reglas básicas para usar este sitio informativo.",
  description: "Términos de uso de Link-Credit: contenido educativo sin garantías, sin asesoría financiera ni legal, uso de la calculadora bajo tu responsabilidad y enlaces a sitios de terceros.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  crumbTitle: "Términos",
  body: prose(`${stamp}
<h2>1. Naturaleza del sitio</h2>
<p>Link-Credit ofrece contenido educativo general. No es asesoría financiera, legal, fiscal ni de inversión, y no establece una relación profesional contigo.</p>
<h2>2. Sin garantías</h2>
<p>Hacemos un esfuerzo razonable por mantener la información correcta y actualizada, pero la ofrecemos "tal cual", sin garantías de exactitud, integridad o idoneidad para un fin particular. Las leyes y las políticas de los prestamistas cambian.</p>
<h2>3. La calculadora</h2>
<p>La calculadora es una herramienta ilustrativa. No predice puntajes, no determina la aprobación de ningún crédito y sus resultados dependen de los datos que escribas. Úsala bajo tu propia responsabilidad.</p>
<h2>4. Decisiones propias</h2>
<p>Tú decides qué hacer con tu dinero y tu crédito. Antes de actuar, verifica la información con las fuentes oficiales citadas o con un profesional con licencia.</p>
<h2>5. Enlaces de terceros</h2>
<p>Los enlaces externos se ofrecen por conveniencia. No controlamos esos sitios ni respondemos por su contenido.</p>
<h2>6. Propiedad del contenido</h2>
<p>Los textos y el diseño de este sitio son de ${SITE.owner}. Puedes citar fragmentos breves con atribución y un enlace a la página original.</p>
<h2>7. Cambios</h2>
<p>Podemos actualizar estos términos. La fecha de la última actualización aparece arriba.</p>
<h2>8. Contacto</h2>
<p>${mailto}.</p>`),
};

/* ───────── Aviso educativo ───────── */
const aviso = {
  path: "/aviso-educativo/",
  title: "Aviso educativo",
  h1: "Aviso educativo",
  lead: "Lo que este sitio es, lo que no es y por qué importa.",
  description: "Aviso educativo de Link-Credit: contenido informativo sin garantías de puntaje ni aprobación, sin reparación de crédito, sin venta de líneas de crédito y sin asesoría personalizada.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  crumbTitle: "Aviso educativo",
  body: prose(`${stamp}
<h2>Solo con fines educativos</h2>
<p>Todo el contenido de Link-Credit es informativo. Sirve para entender conceptos; no sustituye el consejo de un profesional con licencia.</p>
<h2>Sin promesas de resultados</h2>
<p>Ninguna página de este sitio garantiza que tu puntaje suba, que un prestamista te apruebe o que un negocio obtenga financiamiento. El resultado de cualquier decisión depende de tu situación y de las reglas de cada prestamista.</p>
<h2>Lo que no ofrecemos</h2>
<ul>
<li>Reparación de crédito ni eliminación de información de tus informes.</li>
<li>Venta o alquiler de líneas de crédito, calificaciones o cuentas ("tradelines", "usuarios autorizados").</li>
<li>Tramitación de solicitudes de préstamos, tarjetas o líneas de crédito.</li>
<li>Consultoría pagada ni asesoría personalizada.</li>
</ul>
<h2>Qué puedes hacer tú gratis</h2>
<p>Puedes pedir tus informes gratuitos en <a href="${SRC.acr[1]}" rel="noopener" target="_blank">AnnualCreditReport.com</a> y disputar errores directamente con los burós y los acreedores, sin costo. Lee la <a href="${SRC.ftcScams[1]}" rel="noopener" target="_blank">alerta de la FTC</a> sobre estafas al "arreglar" el crédito, y la <a href="${SRC.cfpbRepairBlog[1]}" rel="noopener" target="_blank">advertencia de la CFPB</a>.</p>
<h2>Fuentes</h2>
<p>Citamos fuentes oficiales y comprobamos que los enlaces funcionaban en la fecha de actualización de cada página. Si encuentras un enlace roto o un dato incorrecto, escríbenos a ${mailto}.</p>`),
};

/* ───────── 404 ───────── */
const notFound = {
  path: "/404.html",
  notFound: true,
  noindex: true,
  title: "Página no encontrada",
  h1: "Página no encontrada",
  lead: "Esta dirección no existe o cambió de lugar.",
  description: "La página que buscas no existe o cambió de dirección. Usa los enlaces para volver al inicio, a las guías o a la calculadora.",
  crumbs: [["/", "Inicio"]],
  body: prose(`
<p>Prueba con alguna de estas secciones:</p>
<ul>
<li><a href="/">Inicio</a></li>
<li><a href="/credito-personal/">Crédito personal</a></li>
<li><a href="/credito-empresarial/">Crédito empresarial</a></li>
<li><a href="/guias/">Guías</a></li>
<li><a href="/herramientas/utilizacion-crediticia/">Calculadora de utilización</a></li>
</ul>`),
};

export const pages = [
  home,
  personal,
  empresarial,
  experiencia,
  calculadora,
  guiasIndex,
  ...guides,
  sobre,
  contacto,
  privacidad,
  terminos,
  aviso,
  notFound,
];
