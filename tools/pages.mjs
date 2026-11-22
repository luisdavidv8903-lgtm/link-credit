// Contenido de todas las páginas. Solo datos verificados (ver site.mjs). Sin cifras ni resultados inventados.
import { SITE, SRC } from "./site.mjs";
import { guides, personal, empresarial } from "./articles.mjs";

const D = SITE.updated;
const H = SITE.updatedHuman;
const wrap = (inner, cls = "") => `<section${cls ? ` class="${cls}"` : ""}><div class="wrap">${inner}</div></section>`;
const prose = (inner) => wrap(`<div class="prose">${inner}</div>`);
const mailto = `<!--email_off--><a href="mailto:${SITE.email}">${SITE.email}</a><!--/email_off-->`;
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
    <p><a class="btn btn-outline" href="/experiencia-real/">Leer la experiencia</a></p>
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
// Hechos publicados: solo los autorizados por el fundador y respaldados por comunicaciones de las propias entidades
// (ver INFORME_EXPERIENCIA en Desktop\reports). No se publica nombre, EIN, UEI, cuentas, límites, puntajes ni saldos.
const expSources = ["flLlc", "sbaStructure", "irsEin", "dnb", "sbaLoans", "cfpbInquiry", "cfpbCards"];
const experiencia = {
  path: "/experiencia-real/",
  title: "Experiencia: crédito con una LLC nueva",
  h1: "Experiencia del fundador de Link-Credit: crédito empresarial con una LLC nueva",
  lead: "Qué pasó, qué no pasó y qué aprendimos al construir crédito empresarial desde cero. Sin promesas.",
  description: "Cómo fue construir crédito empresarial con una LLC nueva en Florida: pasos, una aprobación, una solicitud no aprobada y cinco aprendizajes con fuentes oficiales.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  crumbTitle: "Experiencia",
  body: prose(`${stamp}
<h2>Introducción</h2>
<p>En mayo de 2026, el fundador de Link-Credit constituyó una LLC en Florida y empezó a construir crédito empresarial desde cero. Esta página cuenta ese proceso con la mayor precisión posible: lo que se hizo, lo que salió bien, lo que no salió bien y lo que enseñó. Es una experiencia particular, no una receta.</p>
<div class="note"><strong>Transparencia.</strong> Esta página presenta experiencias particulares del fundador de Link-Credit. No constituye una promesa de aprobación, mejora de puntuación ni acceso garantizado a financiamiento. Las políticas de los prestamistas y las circunstancias de cada solicitante pueden variar.</div>
<div class="info"><strong>Qué no publicamos.</strong> Nombre personal, dirección, números de cuenta o de identificación, puntuaciones, límites, saldos, deudas, ingresos ni documentos financieros privados. Tampoco usamos testimonios ficticios ni atribuimos resultados de otros negocios a esta experiencia. Donde no podemos comprobar un dato, no lo afirmamos.</div>

<h2 id="cronologia">Cronología empresarial</h2>
<p>Ponemos mes y año solo cuando contamos con un comprobante de la propia entidad. Cuando no, omitimos la fecha.</p>
<ol class="timeline">
<li><span class="when">26 de mayo de 2026 · Constitución de la LLC</span>Se presentaron los artículos de organización ante la <a href="${SRC.flLlc[1]}" rel="noopener" target="_blank">División de Corporaciones de Florida</a>. Registrar la empresa crea una entidad legal; no crea historial crediticio.</li>
<li><span class="when">Primeros pasos · EIN y banca empresarial</span>Se obtuvo el EIN ante el <a href="${SRC.irsEin[1]}" rel="noopener" target="_blank">IRS</a> y se establecieron relaciones bancarias empresariales para separar las finanzas del negocio de las personales.</li>
<li><span class="when">Julio de 2026 · Dun &amp; Bradstreet</span>D&amp;B asignó a la empresa un <a href="${SRC.dnb[1]}" rel="noopener" target="_blank">número D-U-N-S</a>. No lo publicamos. Es un identificador, no una puntuación: la propia D&amp;B avisó de que, al principio, el archivo puede no tener información suficiente para generar puntuaciones. No afirmamos que la empresa tenga una puntuación comercial específica.</li>
<li><span class="when">27 de julio de 2026 · Proveedores comerciales</span>Un proveedor respondió a una solicitud de términos de pago (Net-30) que no había sido aprobada. Lo contamos <a href="#no-todas">más abajo</a>.</li>
<li><span class="when">5 de octubre de 2026 · Tarjeta empresarial</span>American Express aprobó una tarjeta Blue Business Plus. Detalle en la <a href="#aprobacion-tarjeta">siguiente sección</a>.</li>
</ol>
<p class="minor">No afirmamos que algún proveedor haya reportado la actividad de la empresa a un buró comercial: no tenemos un informe que lo demuestre.</p>

<h2 id="aprobacion-tarjeta">Aprobación de una tarjeta empresarial</h2>
<p>El 5 de octubre de 2026, American Express aprobó la tarjeta Blue Business Plus para la empresa. Es un hecho real, y también un caso particular. No afirmamos que sea la primera aprobación empresarial ni la única. Lo que sí podemos decir con honestidad:</p>
<ul>
<li><strong>La empresa era relativamente nueva.</strong> Llevaba poco más de cuatro meses constituida y tenía poco historial propio.</li>
<li><strong>La solicitud resultó aprobada.</strong> Y no sabemos exactamente por qué: la notificación de aprobación no detalla los factores. Por eso no publicamos teorías.</li>
<li><strong>Las instituciones pueden evaluar el crédito personal del propietario.</strong> En una empresa joven es común, porque la empresa casi no tiene historial. Cuando alguien solicita crédito, el prestamista puede consultar sus informes; lo explica la <a href="${SRC.cfpbInquiry[1]}" rel="noopener" target="_blank">CFPB</a>.</li>
<li><strong>Una aprobación no garantiza resultados equivalentes para otros solicitantes.</strong> Cada prestamista decide con sus propios criterios y cambian con el tiempo.</li>
<li><strong>Crédito empresarial no significa necesariamente financiamiento sin garantía personal.</strong> Una empresa nueva puede responder con el patrimonio de su dueño. Más en <a href="/guias/credito-personal-vs-empresarial/">crédito personal vs. empresarial</a>.</li>
</ul>
<p>No publicamos límites, puntuaciones ni condiciones individuales. Link-Credit no está afiliado a American Express ni a ninguna otra entidad financiera mencionada.</p>

<h2 id="no-todas">No todas las solicitudes terminan en aprobación, y no todas las aprobaciones convienen.</h2>
<p>Una experiencia honesta incluye las respuestas que no fueron un sí. También exige no mezclar situaciones distintas: una cosa es que te rechacen, otra recibir una oferta que parece buena, otra descartar algo por decisión propia y otra no llegar a solicitarlo.</p>
<h3>Solicitudes efectivamente rechazadas</h3>
<p>Es el caso que podemos documentar con comunicación escrita. La solicitud en línea de términos de pago (Net-30) a un proveedor de suministros no fue aprobada de forma automática, y se pidió una revisión manual. El 27 de julio de 2026, el proveedor respondió que la cuenta todavía no calificaba para facturación y explicó qué se necesitaba para volver a evaluarla:</p>
<ul>
<li>Contar con entre tres y cinco proveedores ya establecidos con el negocio.</li>
<li>Pagar por adelantado los pedidos durante 90 días (tres meses consecutivos), con un mínimo de compra de 100 dólares al mes.</li>
</ul>
<p>No identificamos al proveedor: son sus condiciones, no una regla general del mercado.</p>
<p><strong>Aprendizaje:</strong> aquí sí conocemos el motivo porque el propio proveedor lo dijo. Cuando el prestamista o proveedor no lo explica, no lo inventamos: lo pedimos por escrito y lo guardamos.</p>
<h3>Ofertas precalificadas</h3>
<p>Una precalificación no es una aprobación, y recibirla no es lo mismo que presentar una solicitud. En octubre de 2026 llegó una comunicación de un prestador de financiamiento comercial que decía que la empresa estaba precalificada y pedía documentos para continuar. El mensaje no indicaba un producto concreto, ni monto, ni condiciones. Por eso esta página no describe ningún resultado de esa precalificación: no es una aprobación ni una solicitud rechazada, y no la contamos como ninguna de las dos.</p>
<p>Si recibes algo parecido, antes de avanzar pregunta qué producto es, cuánto cuesta en total y quién responde si el negocio no paga.</p>

<h2 id="descartadas">Decisiones financieras que se descartaron</h2>
<p>Decir que no también es una decisión financiera. Estas son las preguntas que nos hacemos antes de aceptar o solicitar un producto:</p>
<ul>
<li>¿Cuánto cuesta en total? Intereses, comisiones, cuota anual y penalidades, no solo el límite.</li>
<li>¿Quién responde si el negocio no paga? ¿Hay garantía personal?</li>
<li>¿El pago cabe en el flujo de caja de un mes flojo, no solo de uno bueno?</li>
<li>¿Lo necesito ahora para algo concreto del negocio?</li>
<li>¿Cuántas consultas duras generará la solicitud? Se explica en la <a href="${SRC.cfpbInquiry[1]}" rel="noopener" target="_blank">CFPB</a>.</li>
</ul>
<h3>Productos descartados por decisión propia</h3>
<p>Descartar voluntariamente un producto es distinto de que te lo rechacen. Hoy esta página no cita productos concretos que hayamos descartado; los añadiremos solo cuando podamos documentarlos.</p>
<h3>Solicitudes que nunca se presentaron</h3>
<p>Informarse sobre un producto, o recibir una oferta, no es solicitarlo. Tampoco contamos como solicitud algo que no se presentó.</p>
<h3>Cuando una línea de crédito es un riesgo</h3>
<p>Una línea de crédito puede ser un riesgo si su costo supera el beneficio económico esperado. Un límite alto no es una ganancia: es una deuda posible. Si el dinero no genera más valor que lo que cuesta, o si el pago depende de ventas que todavía no existen, pedirlo puede empeorar la situación del negocio. La guía <a href="/guias/evaluar-tarjeta-empresarial/">cómo evaluar una tarjeta empresarial</a> da una lista de revisión.</p>

<h2 id="aprendizajes">Cinco aprendizajes</h2>
<h3>1. Registrar una LLC no crea automáticamente historial crediticio</h3>
<p>El registro estatal crea una entidad legal. El historial crediticio aparece cuando hay obligaciones o pagos que alguien reporta a un buró, y eso es otro proceso. Qué hacer: registra bien la empresa, mantén tus datos iguales en todos lados y pide a cada proveedor que te diga si reporta. Fuentes: <a href="${SRC.flLlc[1]}" rel="noopener" target="_blank">Florida</a> y <a href="${SRC.sbaStructure[1]}" rel="noopener" target="_blank">SBA</a>.</p>
<h3>2. Tener un EIN no garantiza financiamiento</h3>
<p>El EIN identifica a tu empresa ante el IRS. Es necesario para muchas cosas, pero no es una calificación ni una promesa de ningún prestamista. Qué hacer: úsalo para ordenar impuestos y cuentas, y no lo trates como un permiso de crédito. Fuente: <a href="${SRC.irsEin[1]}" rel="noopener" target="_blank">IRS</a>.</p>
<h3>3. Un proveedor comercial no necesariamente reporta a los burós</h3>
<p>Un proveedor puede darte términos de pago y aun así no reportar. Y algunos exigen antes un historial de compras, como vimos arriba. Qué hacer: pregunta por escrito qué buró recibe los datos y no compres solo para «aparecer» en un informe. El número D-U-N-S solo ayuda a que D&amp;B ordene un archivo de tu empresa; <a href="${SRC.dnb[1]}" rel="noopener" target="_blank">consulta sus condiciones</a>.</p>
<h3>4. El crédito empresarial puede involucrar garantías personales</h3>
<p>En una empresa nueva, el prestamista suele mirar también a su dueño. Antes de firmar, lee qué garantiza tu firma, hasta cuánto y si el producto puede aparecer en tu informe personal. Más detalle en la guía de <a href="/guias/perfil-crediticio-llc-nueva/">primeros pasos de una LLC nueva</a>.</p>
<h3>5. Proteger el flujo de caja importa más que acumular límites</h3>
<p>Un límite alto no paga facturas. El flujo de caja sí. Qué hacer: calcula el pago mensual en un mal mes, deja margen y no uses el crédito para cubrir gastos recurrentes que el negocio no cubre. Fuentes: <a href="${SRC.sbaLoans[1]}" rel="noopener" target="_blank">SBA</a> y <a href="${SRC.cfpbCards[1]}" rel="noopener" target="_blank">CFPB</a>. Puedes revisar tu uso de crédito con la <a href="/herramientas/utilizacion-crediticia/">calculadora de utilización</a>.</p>

<div class="sources"><h2>Fuentes oficiales</h2><ul>${expSources.map((k) => `<li><a href="${SRC[k][1]}" rel="noopener" target="_blank">${SRC[k][0]}</a></li>`).join("")}</ul><p class="meta">Los enlaces apuntan a sitios externos, en inglés en su mayoría. Comprobamos que abrían el ${H}.</p></div>

<h2>Aviso educativo</h2>
<p>Esto es una experiencia personal con fines educativos. No es asesoría financiera, legal ni fiscal, y no promete resultados a nadie. Link-Credit no presta dinero ni gestiona solicitudes de crédito. Lee el <a href="/aviso-educativo/">aviso educativo</a> completo.</p>`),
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
  <div class="info"><strong>Privacidad:</strong> el cálculo ocurre en tu navegador. Lo que escribes no se envía, no se guarda y no se usa para ningún otro fin. En nuestra revisión técnica del 21 de noviembre de 2026, esta página no estableció cookies ni usó el almacenamiento del navegador.</div>
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
    <p class="minor">Los niveles (muy baja, baja, moderada, alta) son una referencia propia de esta herramienta, no categorías oficiales de ningún buró ni modelo de puntaje.</p>
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
<ul class="glist">${guides.map((g) => `<li class="card"><h2><a href="${g.path}">${g.h1}</a></h2><p>${g.lead}</p><p class="meta m0">Actualizada el <time datetime="${D}">${H}</time></p></li>`).join("")}</ul>
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
<li>No ofrecemos servicios de reparación de crédito ni cobramos por intervenir en tus informes.</li>
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
  lead: "Qué datos trata este sitio, qué terceros intervienen y cómo contactarnos.",
  description: "Política de privacidad de Link-Credit: no pedimos datos sensibles, la calculadora funciona solo en tu navegador y Cloudflare aloja el sitio y procesa datos técnicos de la visita.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  crumbTitle: "Privacidad",
  body: prose(`${stamp}
<h2>Resumen</h2>
<p>Este sitio es informativo. No tiene cuentas de usuario, formularios de solicitud ni pagos, y no pide datos sensibles (número de Seguro Social, cuentas bancarias, contraseñas).</p>
<h2>La calculadora</h2>
<p>Los números que escribes en las calculadoras se procesan únicamente en tu navegador. El código de la calculadora no los envía a ningún servidor, no los guarda en cookies ni en el almacenamiento del navegador y no los comparte con terceros.</p>
<h2>Cookies y almacenamiento local</h2>
<p>En las páginas del sitio educativo (inicio, crédito personal y empresarial, guías, calculadoras, experiencia, Sobre, Contacto, Privacidad, Términos y Aviso educativo) no se establecen cookies ni se usa el almacenamiento local o de sesión del navegador. Lo comprobamos el 21 de noviembre de 2026.</p>
<p>Excepción: en las páginas de error (por ejemplo, una dirección que no existe) y en algunas páginas heredadas alojadas en este dominio que no forman parte del sitio educativo, Cloudflare puede ejecutar su detección de bots y guardar una cookie de seguridad llamada <code>cf_clearance</code>. Esa cookie la gestiona Cloudflare para proteger el servicio; no la usamos para seguirte.</p>
<h2>Terceros que intervienen: Cloudflare</h2>
<p>El sitio se aloja y se protege con Cloudflare. Para entregar las páginas y proteger el servicio, Cloudflare procesa datos técnicos de cada solicitud, como la dirección IP, el tipo de navegador y la página pedida. Consulta la política de privacidad de Cloudflare para más información.</p>
<p><strong>Medición de visitas.</strong> Hasta el 21 de noviembre de 2026, este dominio tenía activada la medición de visitas de Cloudflare Web Analytics (inyección automática de un script). Ese día se desactivó. Los datos agregados que se recopilaron antes permanecen en la cuenta de Cloudflare del operador. No usamos Google Analytics, píxeles de publicidad ni otras herramientas de seguimiento.</p>
<p><strong>Detección de bots.</strong> Cloudflare puede insertar en las páginas un script de detección de bots. En el sitio educativo, la política de seguridad de contenido impide que se ejecute. La protección de red de Cloudflare sigue activa.</p>
<h2>Si nos escribes</h2>
<p>Si nos envías un correo o nos llamas, usaremos tus datos solo para responderte. No los vendemos ni los compartimos con fines de publicidad. Te pedimos no enviar datos sensibles; si lo haces por error, avísanos y lo eliminaremos.</p>
<h2>Enlaces externos</h2>
<p>Las guías enlazan a sitios de terceros (por ejemplo, la CFPB o la FTC). Esos sitios tienen sus propias políticas y pueden usar cookies.</p>
<h2>Contacto</h2>
<p>Para preguntas sobre privacidad: ${mailto}.</p>`),
};

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
