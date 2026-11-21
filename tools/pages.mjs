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
  body: `
<section class="hero"><div class="wrap">
  <h1>Entiende tu crédito. <em>Decide con criterio.</em></h1>
  <p>Educación financiera en español sobre crédito personal y empresarial: explicaciones claras, ejemplos y fuentes oficiales. Para que tomes tus decisiones con información, no con promesas.</p>
  <div class="btns">
    <a class="btn btn-primary" href="/credito-empresarial/">Crédito empresarial</a>
    <a class="btn btn-ghost" href="/herramientas/utilizacion-crediticia/">Calculadora de utilización</a>
  </div>
</div></section>

${wrap(`
<h2 class="section-title">Por dónde empezar</h2>
<p class="section-lead">Elige el tema que más te sirve hoy. Cada página explica los conceptos, los riesgos y las preguntas que conviene hacer antes de decidir.</p>
<div class="grid grid-3">
  <article class="card priority"><span class="tag">Prioridad</span><h3>Crédito empresarial</h3><p>Cómo funciona el crédito de una empresa, qué piden los prestamistas y qué errores evitar en una LLC nueva.</p><a class="more" href="/credito-empresarial/">Leer la guía</a></article>
  <article class="card"><h3>Crédito personal</h3><p>Historial de pagos, utilización, informes, consultas y puntajes, explicados sin tecnicismos.</p><a class="more" href="/credito-personal/">Leer la guía</a></article>
  <article class="card"><h3>Calculadora de utilización</h3><p>Calcula el porcentaje de tu crédito que estás usando. Funciona en tu navegador y no guarda tus datos.</p><a class="more" href="/herramientas/utilizacion-crediticia/">Usar la calculadora</a></article>
</div>`)}

${wrap(`
<h2 class="section-title">Guías para leer con calma</h2>
<p class="section-lead">Cinco guías originales, con fuentes oficiales y fecha de actualización.</p>
<ul class="glist">${guides.map((g) => `<li class="card"><h3><a href="${g.path}">${g.h1}</a></h3><p>${g.lead}</p></li>`).join("")}</ul>
<p class="mt20"><a href="/guias/">Ver todas las guías</a></p>`, "band")}

${wrap(`
<div class="grid grid-2">
  <div>
    <h2 class="section-title">Qué hacemos</h2>
    <ul class="checks">
      <li>Explicar conceptos de crédito en español claro.</li>
      <li>Citar fuentes oficiales (CFPB, FTC, SBA, FDIC, IRS y los propios burós).</li>
      <li>Señalar riesgos y errores frecuentes.</li>
      <li>Ofrecer una calculadora que no guarda ni envía tus datos.</li>
    </ul>
  </div>
  <div>
    <h2 class="section-title">Lo que no hacemos</h2>
    <ul class="checks no">
      <li>No reparamos ni "limpiamos" crédito.</li>
      <li>No vendemos ni alquilamos líneas de crédito ni calificaciones.</li>
      <li>No tramitamos solicitudes de préstamos ni tarjetas.</li>
      <li>No pedimos tu Seguro Social ni tus datos bancarios.</li>
      <li>No prometemos puntajes, aprobaciones ni resultados.</li>
    </ul>
  </div>
</div>`)}

${wrap(`
<div class="card">
  <h2 class="section-title">Experiencia real</h2>
  <p>Estamos preparando un relato propio sobre lo que se aprende al construir crédito empresarial con una LLC nueva. Lo publicaremos solo con hechos que podamos sostener y sin datos privados.</p>
  <p><a class="more" href="/experiencia-real/">Ver el estado de esta sección</a></p>
</div>`)}
`,
};

/* ───────── Experiencia real (placeholder noindex) ───────── */
const experiencia = {
  path: "/experiencia-real/",
  title: "Experiencia real: en preparación",
  h1: "Lo que aprendí construyendo crédito empresarial con una LLC nueva",
  lead: "Esta sección está en preparación.",
  description: "Sección en preparación: un relato propio sobre construir crédito empresarial con una LLC nueva, sin datos privados ni promesas.",
  noindex: true,
  updated: D,
  crumbs: [["/", "Inicio"]],
  crumbTitle: "Experiencia real",
  body: prose(`
<p>Todavía no hemos publicado este relato. Cuando lo hagamos, seguirá estas reglas:</p>
<ul>
<li>Contará lo que ocurrió y lo que se aprendió, en orden y con fechas verificables.</li>
<li>No inventará resultados ni los presentará como garantía para nadie.</li>
<li>No incluirá puntajes, límites, saldos, documentos, nombres de terceros ni capturas de cuentas privadas, a menos que el titular decida expresamente compartirlos.</li>
<li>Dirá con claridad qué es experiencia personal y qué es información general con fuente oficial.</li>
</ul>
<p>Mientras tanto, la <a href="/credito-empresarial/">guía de crédito empresarial</a> reúne lo que ya podemos respaldar con fuentes.</p>`),
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
<div class="note"><strong>Borrador pendiente de revisión legal.</strong> Este texto describe el funcionamiento actual del sitio y debe ser revisado por un abogado antes de considerarse definitivo.</div>
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
<div class="note"><strong>Borrador pendiente de revisión legal.</strong> Este texto debe ser revisado por un abogado antes de considerarse definitivo.</div>
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
