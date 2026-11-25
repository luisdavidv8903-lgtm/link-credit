// Guías educativas y páginas de categoría. Texto original. Cada fuente está en site.mjs (SRC).
import { SITE, SRC } from "./site.mjs";

const D = SITE.updated;
const H = SITE.updatedHuman;

const sources = (keys, extra = "") =>
  `<div class="sources"><h2>Fuentes oficiales</h2><ul>${keys
    .map((k) => `<li><a href="${SRC[k][1]}" rel="noopener" target="_blank">${SRC[k][0]}</a></li>`)
    .join("")}</ul>${extra}<p class="meta">Los enlaces apuntan a sitios externos, en inglés en su mayoría. Comprobamos que abrían el ${H}.</p></div>`;

const warn = (html) => `<div class="note"><strong>Advertencia.</strong> ${html}</div>`;
const wrap = (inner) => `<section><div class="wrap"><div class="prose">${inner}</div></div></section>`;
const toc = (items) =>
  `<nav class="toc" aria-label="En esta página"><strong>En esta página</strong><ol>${items
    .map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`)
    .join("")}</ol></nav>`;
const stamp = `<p class="meta">Última actualización: <time datetime="${D}">${H}</time>. Contenido educativo, no asesoría financiera.</p>`;

const GENERIC_WARN = warn(
  "Este contenido es informativo y general. No predice cómo cambiará ningún puntaje, no garantiza aprobaciones y no reemplaza el consejo de un profesional con licencia. Las reglas de cada prestamista y cada modelo de puntaje pueden diferir."
);

const articleLd = (title, path, desc) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: desc,
  inLanguage: "es-US",
  dateModified: D,
  datePublished: D,
  mainEntityOfPage: SITE.origin + path,
  author: { "@type": "Organization", name: "Link-Credit" },
  publisher: { "@type": "Organization", name: "Link-Credit" },
});

const guide = (o) => ({
  path: `/guias/${o.slug}/`,
  title: o.short || o.title,
  h1: o.title,
  lead: o.lead,
  description: o.description,
  article: true,
  updated: D,
  crumbs: [["/", "Inicio"], ["/guias/", "Guías"]],
  jsonld: articleLd(o.title, `/guias/${o.slug}/`, o.description),
  body: wrap(stamp + o.html + GENERIC_WARN + sources(o.sources)),
});

export const guides = [
  guide({
    slug: "utilizacion-crediticia",
    title: "Cómo interpretar la utilización crediticia",
    lead: "Qué mide, cómo se calcula y por qué un número bajo ayuda, sin convertirse en una promesa.",
    description: "Aprende qué es la utilización crediticia, cómo se calcula, qué referencias existen y los errores más comunes al interpretarla. Con ejemplos y fuentes oficiales.",
    sources: ["myficoFactors", "cfpbScore", "cfpbKeep", "cfpbTools"],
    html: `
<h2>Qué es la utilización crediticia</h2>
<p>Es el porcentaje de tu crédito revolvente (tarjetas de crédito y líneas de crédito) que estás usando. Se calcula así:</p>
<p><strong>Utilización = saldo total ÷ límite total × 100</strong></p>
<p>Por ejemplo, si tienes dos tarjetas con límites de $2,000 y $3,000 y saldos de $400 y $600, tu saldo total es $1,000, tu límite total es $5,000 y tu utilización es 20 %. Puedes probarlo en la <a href="/herramientas/utilizacion-crediticia/">calculadora de utilización</a>; funciona en tu navegador y no guarda lo que escribes.</p>
<h2>Por qué importa</h2>
<p>Los modelos de puntaje miran cuánto debes en relación con tu límite como señal del riesgo de que no puedas pagar. En el puntaje FICO, la categoría de "cantidades adeudadas" es una de las dos más pesadas, junto con el historial de pagos, según explica myFICO. Otros modelos, como VantageScore, ponderan los factores de otra manera. No hay un único cálculo universal.</p>
<h2>¿Existe un porcentaje ideal?</h2>
<p>Verás con frecuencia la referencia de "mantenerse por debajo de 30 %". Es una pauta práctica, no una regla oficial de los burós ni una frontera exacta: no ocurre nada especial al pasar de 29 % a 31 %. En general, un uso más bajo se ve mejor que uno alto, pero ningún porcentaje garantiza un resultado.</p>
<h2>Cómo se ve por tarjeta y en total</h2>
<ul>
<li><strong>En total:</strong> suma de saldos entre suma de límites.</li>
<li><strong>Por tarjeta:</strong> algunos modelos también pueden mirar cada tarjeta por separado, así que una sola tarjeta muy cargada puede notarse aunque el total sea moderado.</li>
</ul>
<h2>Cuándo se reporta el saldo</h2>
<p>Muchos emisores reportan a los burós el saldo que aparece al cierre de tu estado de cuenta, no el que tienes el día de pago. Por eso puedes pagar todo cada mes y aun así ver un saldo reportado distinto de cero. Si te interesa influir en el saldo que se reporta, revisa la fecha de cierre de tu estado de cuenta y pregunta a tu emisor cómo reporta.</p>
<h2>Errores frecuentes</h2>
<ul>
<li><strong>Confundir utilización con deuda total.</strong> Un préstamo de auto o una hipoteca son crédito a plazos y no cuentan en esta razón.</li>
<li><strong>Cerrar una tarjeta sin pensar.</strong> Al cerrarla baja tu límite total y tu utilización puede subir aunque tus saldos no cambien.</li>
<li><strong>Creer que pagar el mínimo basta.</strong> Pagar a tiempo ayuda a tu historial, pero un saldo alto sigue pesando en la utilización y cuesta intereses.</li>
<li><strong>Dar por hecho que los límites reportados son correctos.</strong> Revisa tu informe: un límite faltante o equivocado cambia el resultado.</li>
</ul>
<h2>Cómo usar este dato con criterio</h2>
<ol>
<li>Obtén tus informes gratuitos y comprueba saldos y límites. Cómo hacerlo: <a href="/credito-personal/#reportes">reportes de crédito</a>.</li>
<li>Calcula tu utilización total y la de cada tarjeta.</li>
<li>Decide con tu presupuesto: reducir saldos es un objetivo válido por sí mismo, porque disminuye intereses.</li>
</ol>`,
  }),

  guide({
    slug: "credito-personal-vs-empresarial",
    short: "Crédito personal vs. empresarial: diferencias",
    title: "Diferencias entre crédito personal y crédito empresarial",
    lead: "Son historiales distintos, con reglas y accesos distintos. Entender la diferencia evita decisiones basadas en promesas.",
    description: "Crédito personal vs. empresarial: quién se evalúa, qué burós intervienen, qué es una garantía personal y por qué una LLC nueva no tiene crédito propio.",
    sources: ["cfpbReport", "dnb", "sbaLoans", "fdicMoney"],
    html: `
<h2>La idea central</h2>
<p>El crédito personal evalúa a una persona. El crédito empresarial evalúa a una empresa. Aunque en un negocio nuevo ambos suelen estar muy ligados, son historiales distintos con informes distintos.</p>
<div class="table-scroll" tabindex="0" role="region" aria-label="Tabla comparativa, desplazable"><table class="t">
<thead><tr><th>Aspecto</th><th>Crédito personal</th><th>Crédito empresarial</th></tr></thead>
<tbody>
<tr><td>A quién se evalúa</td><td>A ti como individuo.</td><td>A la empresa (aunque el prestamista también puede mirar al dueño).</td></tr>
<tr><td>Quién reúne el historial</td><td>Los tres burós de consumo: Equifax, Experian y TransUnion.</td><td>Burós comerciales, como Dun &amp; Bradstreet, y las divisiones empresariales de Experian y Equifax.</td></tr>
<tr><td>Cómo verlo</td><td>Informes gratuitos por ley en AnnualCreditReport.com.</td><td>No existe el mismo informe gratuito universal; muchos servicios de monitoreo cuestan.</td></tr>
<tr><td>Identificador</td><td>Tu número de Seguro Social o ITIN, y tus datos personales.</td><td>El EIN y, en algunos casos, un número D-U-N-S.</td></tr>
<tr><td>Garantía personal</td><td>No aplica.</td><td>Frecuente en empresas nuevas: el dueño responde con su patrimonio.</td></tr>
</tbody></table></div>
<h2>Una LLC no tiene crédito propio por existir</h2>
<p>Crear una LLC, obtener un EIN o un número D-U-N-S es un paso de organización y de identificación. No genera crédito por sí solo ni obliga a nadie a prestarte. Una empresa sin historial suele depender, al comienzo, del crédito personal del dueño.</p>
<h2>Qué es una garantía personal</h2>
<p>Es el compromiso del dueño de pagar si la empresa no puede. Con ella, un impago de la empresa puede convertirse en tu deuda personal. Antes de firmarla, lee qué cubre, hasta qué monto y si el prestamista puede reportar al buró personal.</p>
<h2>Por qué separar ambos mundos</h2>
<ul>
<li>Cuentas bancarias distintas facilitan ver el flujo de caja de la empresa.</li>
<li>Mezclar gastos personales y empresariales puede complicar tu contabilidad y debilitar la separación entre el patrimonio del dueño y el de la empresa; consulta a un contador o abogado de tu estado.</li>
<li>Cada deuda tiene riesgos distintos: pregunta siempre quién responde por ella.</li>
</ul>
<h2>Qué llevarte</h2>
<p>Cuida el crédito personal mientras construyes el de la empresa, porque ambos se tocan. Y sospecha de cualquier oferta que prometa crédito empresarial "inmediato" o "sin garantía" solo por registrar una compañía.</p>
<p>Siguiente paso: <a href="/guias/perfil-crediticio-llc-nueva/">primeros pasos para establecer el perfil crediticio de una LLC</a>.</p>`,
  }),

  guide({
    slug: "perfil-crediticio-llc-nueva",
    short: "Perfil crediticio de una LLC nueva",
    title: "Primeros pasos para establecer el perfil crediticio de una LLC",
    lead: "Una ruta ordenada y realista. Sin atajos, porque el historial se construye con el tiempo.",
    description: "Pasos para una LLC recién creada: EIN, separar finanzas, número D-U-N-S, proveedores con términos de pago y monitoreo. Advierte sobre promesas de crédito.",
    sources: ["irsEin", "sbaLicenses", "dnb", "acr", "cfpbDispute"],
    html: `
<div class="info"><strong>Importante:</strong> un EIN, un número D-U-N-S o una LLC <em>no garantizan</em> crédito empresarial. Son piezas de identificación y organización; el crédito lo otorgan los prestamistas y proveedores según su propio análisis.</div>
<h2>1. Formaliza la empresa</h2>
<ul>
<li>Registra la LLC en tu estado y mantén al día los informes y cuotas anuales que te correspondan.</li>
<li>Solicita el <strong>EIN</strong> directamente al IRS. Es un trámite gratuito en el sitio oficial del IRS; desconfía de páginas que cobran por hacerlo.</li>
<li>Revisa las licencias y permisos de tu actividad (la SBA tiene una guía general). Esto varía por estado, ciudad y tipo de negocio.</li>
</ul>
<h2>2. Separa las finanzas</h2>
<p>Abre una cuenta bancaria exclusiva para la empresa y úsala para ingresos y gastos del negocio. Usa el mismo nombre legal, dirección y teléfono en tus registros y cuentas: la consistencia evita confusiones al verificar tu empresa.</p>
<h2>3. Entiende el número D-U-N-S</h2>
<p>El D-U-N-S es un identificador de Dun &amp; Bradstreet. Sirve para que ese buró pueda crear y ordenar un archivo de tu empresa. No es un puntaje, y tenerlo no mejora por sí solo tu historial. Consulta en el sitio de D&amp;B las condiciones y costos vigentes antes de decidir qué solicitar.</p>
<h2>4. Empieza con proveedores que den términos de pago</h2>
<p>Algunos proveedores permiten pagar a 30 días ("net-30"). Antes de abrir una cuenta, pregunta si reportan tus pagos a algún buró comercial: si no reportan, pagarles puntualmente no construye historial en un informe comercial (aunque sí construye una relación comercial). No compres solo para "aparecer" en un informe: compra lo que tu negocio necesita y puedes pagar.</p>
<h2>5. Paga a tiempo y con margen</h2>
<p>La puntualidad es la base. Usa recordatorios y trabaja con un flujo de caja que cubra tus obligaciones antes de aceptar nuevas.</p>
<h2>6. Revisa tus informes</h2>
<ul>
<li><strong>Comerciales:</strong> consulta con cada buró comercial qué ven de tu empresa y cómo corregir un error.</li>
<li><strong>Personales:</strong> si hay garantía personal o el prestamista mira tu historial, tu informe personal importa. Es gratuito en <a href="https://www.annualcreditreport.com/" rel="noopener" target="_blank">AnnualCreditReport.com</a>. Si ves un error, aprende a <a href="${SRC.cfpbDispute[1]}" rel="noopener" target="_blank">disputarlo</a>.</li>
</ul>
<h2>7. Solicita crédito solo cuando puedas pagarlo</h2>
<p>Cada solicitud puede implicar una consulta dura, y cada deuda es una obligación real. Antes de pedir una tarjeta, lee la guía para <a href="/guias/evaluar-tarjeta-empresarial/">evaluar una tarjeta empresarial</a>.</p>
<h2>Señales de alerta</h2>
<ul>
<li>Paquetes que prometen "crédito instantáneo" o "líneas sin garantía personal".</li>
<li>Cobros por trámites que son gratuitos en el sitio oficial (como el EIN).</li>
<li>Presión para decidir hoy o para firmar sin leer.</li>
</ul>`,
  }),

  guide({
    slug: "evaluar-tarjeta-empresarial",
    short: "Cómo evaluar una tarjeta empresarial",
    title: "Cómo evaluar una tarjeta empresarial antes de solicitarla",
    lead: "Una lista de preguntas para comparar con calma, más allá de la publicidad y las recompensas.",
    description: "Qué revisar antes de pedir una tarjeta empresarial: APR, cuotas, garantía personal, a quién reporta, promociones de 0 % y pagos tardíos. Con ejemplo de costo.",
    sources: ["cfpbCards", "cfpbInquiry", "fdicMoney", "sbaLoans"],
    html: `
<h2>Primero: ¿necesitas financiamiento?</h2>
<p>Una tarjeta es deuda. Si la necesitas, define para qué: un gasto concreto con fecha de pago, o un colchón de liquidez. Una promoción de 0 % no es ingreso; el saldo hay que pagarlo.</p>
<h2>Lista de revisión</h2>
<h3>Costos</h3>
<ul>
<li><strong>APR regular:</strong> la tasa anual que pagarás sobre saldos que no liquides. Puede ser variable.</li>
<li><strong>APR de penalización:</strong> algunas tarjetas suben la tasa si pagas tarde. Busca si existe y cuándo se activa.</li>
<li><strong>Cuota anual</strong> y otras comisiones (por pago atrasado, avances de efectivo, transacciones en el exterior, tarjetas adicionales).</li>
</ul>
<h3>Promociones</h3>
<ul>
<li>Cuánto dura el período de 0 % y qué tasa se aplica después.</li>
<li>Si un pago atrasado puede <em>cancelar</em> la promoción.</li>
<li>Si el 0 % cubre compras, transferencias de saldo o ambas.</li>
</ul>
<h3>Responsabilidad</h3>
<ul>
<li><strong>Garantía personal:</strong> ¿te piden firmar como responsable personal? Entonces una deuda de la empresa también puede ser tuya.</li>
<li><strong>Tarjetas para empleados:</strong> ¿quién responde por esos gastos y cómo los controlas?</li>
<li>Las tarjetas empresariales pueden tener menos protecciones legales que las de consumo. Lee el contrato y pregunta.</li>
</ul>
<h3>Efecto en tu crédito</h3>
<ul>
<li>¿Hacen consulta dura en tu informe personal? Pregunta antes de solicitar.</li>
<li>¿A qué buró reportan (personal, comercial o ambos) y cuándo?</li>
</ul>
<h2>Ejemplo del costo real</h2>
<p>Si mantienes un saldo promedio de $5,000 durante un año con un APR de 24 %, pagarías del orden de $1,200 en intereses (cálculo simplificado, sin capitalización; el costo real puede variar). Compara eso con el valor de las recompensas: si gastas $5,000 al año y el beneficio es el 2 %, son unos $100.</p>
<h2>Decisión con criterio</h2>
<ol>
<li>Escribe tus necesidades y cuánto puedes pagar cada mes.</li>
<li>Compara al menos tres ofertas con la misma lista.</li>
<li>Lee el contrato y la tabla de tasas y comisiones antes de aceptar.</li>
<li>Si algo no queda claro, no solicites.</li>
</ol>`,
  }),

  guide({
    slug: "aumentar-limites-no-siempre-ayuda",
    short: "Por qué aumentar límites no siempre ayuda",
    title: "Por qué aumentar los límites no siempre mejora tu situación financiera",
    lead: "Un límite mayor baja tu porcentaje de utilización, pero también puede aumentar el riesgo.",
    description: "Cuándo ayuda un aumento de límite y cuándo no: efecto en la utilización, consultas duras, riesgo de gastar más y por qué no sustituye un buen flujo de caja.",
    sources: ["myficoFactors", "cfpbInquiry", "cfpbKeep", "fdicMoney"],
    html: `
<h2>Lo que sí hace un límite mayor</h2>
<p>Si tu saldo no cambia, un límite más alto reduce tu porcentaje de utilización. Con un saldo de $600: sobre un límite de $2,000 la utilización es 30 %; sobre $4,000 es 15 %. Es cierto, y puede verse mejor en un informe.</p>
<h2>Lo que no hace</h2>
<ul>
<li><strong>No te hace más capaz de pagar.</strong> Tu ingreso y tu flujo de caja siguen igual.</li>
<li><strong>No corrige un historial dañado.</strong> Los pagos atrasados anteriores siguen en el informe según las reglas de tiempo de cada tipo de dato.</li>
<li><strong>No es gratis en todos los casos.</strong> Algunos emisores hacen consulta dura al aprobar un aumento solicitado; otros no. Pregunta antes.</li>
</ul>
<h2>El riesgo de gastar más</h2>
<p>Tener más crédito disponible facilita endeudarse. Si el saldo sube en la misma proporción que el límite, la utilización no mejora y la deuda es mayor. En un negocio con garantía personal, más límite también significa más exposición para ti.</p>
<h2>Aumentos automáticos y solicitados</h2>
<ul>
<li><strong>Automático:</strong> el emisor lo decide según tu comportamiento. Suele ser buena señal, pero no cambies tus hábitos de gasto por eso.</li>
<li><strong>Solicitado:</strong> tú lo pides. Averigua antes si implica consulta dura y qué información verificarán.</li>
</ul>
<h2>Alternativas igual de válidas</h2>
<ul>
<li>Pagar saldos antes del cierre del estado de cuenta, para que se reporte menos.</li>
<li>Mantener abiertas tus cuentas antiguas sin costo (si no tienen cuota anual), porque aportan límite e historial.</li>
<li>Elaborar un presupuesto realista y pagar más que el mínimo.</li>
</ul>
<h2>Cuándo tiene sentido pedirlo</h2>
<p>Cuando ya pagas puntualmente, tus saldos están bajo control, entiendes las condiciones y necesitas un margen de seguridad, no un permiso para gastar más. Si dudas, pregúntate: "¿Pediría este aumento si no me importara mi puntaje?".</p>
<p>Relacionado: <a href="/guias/utilizacion-crediticia/">cómo interpretar la utilización crediticia</a>.</p>`,
  }),
];

/* ───────────── Crédito personal ───────────── */
export const personal = {
  path: "/credito-personal/",
  title: "Crédito personal: conceptos clave",
  h1: "Crédito personal: conceptos clave",
  lead: "Qué mira un informe, cómo se forman los puntajes y qué errores conviene evitar.",
  description: "Guía de crédito personal en español: historial de pagos, utilización, reportes, consultas duras y suaves, antigüedad, modelos de puntaje y errores frecuentes.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  jsonld: articleLd("Crédito personal: conceptos clave", "/credito-personal/", "Guía educativa de crédito personal"),
  body: wrap(`${stamp}
${toc([
  ["pagos", "Historial de pagos"],
  ["utilizacion", "Utilización de tarjetas"],
  ["reportes", "Reportes crediticios"],
  ["consultas", "Consultas duras y suaves"],
  ["antiguedad", "Antigüedad de las cuentas"],
  ["modelos", "Modelos de puntaje"],
  ["errores", "Errores frecuentes"],
  ["deuda", "Riesgos del endeudamiento"],
])}
<h2 id="pagos">Historial de pagos</h2>
<p>Es la señal más importante en la mayoría de los modelos: ¿pagas tus cuentas a tiempo? En el puntaje FICO, el historial de pagos es el factor de mayor peso, según myFICO. Un pago atrasado suele reportarse cuando pasa de 30 días de retraso, y la información negativa puede permanecer en tu informe hasta siete años en la mayoría de los casos.</p>
<h2 id="utilizacion">Utilización de tarjetas</h2>
<p>Mide cuánto de tu límite estás usando: saldo total ÷ límite total × 100. Usa la <a href="/herramientas/utilizacion-crediticia/">calculadora</a> y lee la guía <a href="/guias/utilizacion-crediticia/">cómo interpretar la utilización</a>.</p>
<h2 id="reportes">Reportes crediticios</h2>
<p>Tu informe de crédito es el registro de tus cuentas y tu historial de pagos que mantienen los tres burós nacionales: Equifax, Experian y TransUnion. Es distinto de tu puntaje.</p>
<ul>
<li>Puedes pedir tus informes gratis en <a href="https://www.annualcreditreport.com/" rel="noopener" target="_blank">AnnualCreditReport.com</a>, el sitio autorizado por ley federal. Según la FTC, los tres burós ofrecen consultas gratuitas semanales.</li>
<li>Revisa nombre, direcciones, cuentas abiertas y cerradas, límites, saldos y pagos atrasados.</li>
<li>Si hay un error, puedes <a href="${SRC.cfpbDispute[1]}" rel="noopener" target="_blank">disputarlo directamente y sin costo</a>.</li>
</ul>
<h2 id="consultas">Consultas duras y suaves</h2>
<p>Una <strong>consulta suave</strong> ocurre, por ejemplo, cuando revisas tu propio informe o recibes una preaprobación; no afecta tus puntajes. Una <strong>consulta dura</strong> suele ocurrir cuando solicitas crédito y el prestamista revisa tu informe para decidir; puede influir ligeramente en el puntaje y permanece en el informe hasta dos años. Varias solicitudes en poco tiempo pueden sumar consultas. Más detalle en la <a href="${SRC.cfpbInquiry[1]}" rel="noopener" target="_blank">explicación de la CFPB</a>.</p>
<h2 id="antiguedad">Antigüedad de las cuentas</h2>
<p>Los modelos suelen considerar cuánto tiempo llevas con crédito y la edad de tu cuenta más antigua y la promedio. Cerrar una cuenta antigua sin costo puede acortar ese historial con el tiempo y reducir tu límite total; evalúalo antes de hacerlo.</p>
<h2 id="modelos">Diferencias entre modelos de puntaje</h2>
<p>No existe un solo "puntaje de crédito". FICO y VantageScore son familias de modelos, con varias versiones cada una, y los prestamistas eligen cuál usar según el producto. Por eso el puntaje gratuito que ves en una app puede diferir del que usa el prestamista. Úsalos como orientación, no como cifra exacta. Más información en <a href="${SRC.myficoScores[1]}" rel="noopener" target="_blank">myFICO</a> y en la explicación de la <a href="${SRC.cfpbScore[1]}" rel="noopener" target="_blank">CFPB</a>.</p>
<h2 id="errores">Errores frecuentes</h2>
<ul>
<li>Pagar solo el mínimo con un saldo alto.</li>
<li>Solicitar muchas tarjetas o préstamos a la vez.</li>
<li>Cerrar la tarjeta más antigua sin evaluar el efecto en tu límite total.</li>
<li>No revisar tu informe hasta que necesitas un préstamo.</li>
<li>Ignorar facturas pequeñas que pueden terminar en cobranza.</li>
<li>Pagar a empresas que prometen "limpiar" tu crédito. Lee la <a href="${SRC.ftcScams[1]}" rel="noopener" target="_blank">alerta de la FTC</a>.</li>
</ul>
<h2 id="deuda">Riesgos del endeudamiento</h2>
<p>El crédito es una herramienta con costo. Los intereses compuestos pueden hacer que una deuda crezca más rápido de lo que pagas, sobre todo si solo cubres mínimos. Antes de endeudarte, calcula tu pago mensual realista y cuánto cuesta en total; revisa tu presupuesto y deja margen para imprevistos. Si ya tienes dificultades, contacta a tu acreedor y busca orientación sin fines de lucro; la CFPB tiene <a href="${SRC.cfpbTools[1]}" rel="noopener" target="_blank">herramientas para consumidores</a>.</p>
${GENERIC_WARN}
${sources(["cfpbReport", "cfpbScore", "cfpbInquiry", "cfpbDispute", "ftcFree", "ftcScams", "acr", "myficoFactors", "myficoScores"])}`),
};

/* ───────────── Crédito empresarial ───────────── */
export const empresarial = {
  path: "/credito-empresarial/",
  title: "Crédito empresarial: guía para negocios nuevos",
  h1: "Crédito empresarial: guía para negocios nuevos",
  lead: "Cómo funciona el crédito de una empresa, qué piden los prestamistas y qué errores evitar. Sin promesas, con fuentes.",
  description: "Guía de crédito empresarial para una LLC nueva: D-U-N-S, proveedores, reportes comerciales, garantías personales, tarjetas, líneas de crédito y flujo de caja.",
  updated: D,
  crumbs: [["/", "Inicio"]],
  jsonld: articleLd("Crédito empresarial: guía para negocios nuevos", "/credito-empresarial/", "Guía educativa de crédito empresarial"),
  body: wrap(`${stamp}
<div class="info"><strong>Antes de empezar:</strong> obtener un EIN, un número D-U-N-S o crear una LLC <em>no garantiza</em> crédito empresarial. Son pasos de identificación y organización. El crédito depende del análisis de cada prestamista o proveedor.</div>
${toc([
  ["diferencias", "Personal vs. empresarial"],
  ["llc", "Crédito para una LLC recién creada"],
  ["duns", "D-U-N-S"],
  ["proveedores", "Proveedores con términos de pago"],
  ["reportes", "Reportes de crédito comercial"],
  ["garantia", "Garantías personales"],
  ["tarjetas", "Tarjetas empresariales"],
  ["lineas", "Líneas de crédito"],
  ["apr", "APR y promociones de 0 %"],
  ["flujo", "Flujo de caja y capacidad de pago"],
  ["errores", "Errores frecuentes"],
])}
<h2 id="diferencias">Diferencias entre crédito personal y empresarial</h2>
<p>El personal evalúa a una persona y el empresarial a una empresa; usan informes y burós distintos. En un negocio nuevo ambos se cruzan. Compáralos en detalle en la guía <a href="/guias/credito-personal-vs-empresarial/">crédito personal vs. empresarial</a>.</p>
<h2 id="llc">Crédito para una LLC recién creada</h2>
<p>Una empresa nueva no tiene historial comercial. Por eso los prestamistas suelen revisar al dueño y pedir una garantía personal. Una ruta razonable, sin atajos: formalizar la empresa, separar las finanzas, construir historial con proveedores que reportan y pagar a tiempo. Detalle paso a paso: <a href="/guias/perfil-crediticio-llc-nueva/">primeros pasos para establecer el perfil crediticio de una LLC</a>.</p>
<h2 id="duns">D-U-N-S</h2>
<p>Es un identificador de Dun &amp; Bradstreet para una empresa. Sirve para que ese buró cree y ordene su archivo. No es un puntaje ni garantiza crédito. Consulta condiciones y costos actuales en el <a href="${SRC.dnb[1]}" rel="noopener" target="_blank">sitio de D&amp;B</a>.</p>
<h2 id="proveedores">Proveedores con términos de pago</h2>
<p>Algunos proveedores te dejan pagar a 30 días ("net-30"). Es un crédito comercial. Pregunta antes si reportan a un buró comercial; si no reportan, tus pagos puntuales no aparecerán en un informe. Compra solo lo que tu negocio necesita y puede pagar.</p>
<h2 id="reportes">Reportes de crédito comercial</h2>
<p>Los informes comerciales los generan burós como Dun &amp; Bradstreet, Experian y Equifax (sus divisiones empresariales). Cada uno tiene sus propios métodos y puntajes; por ejemplo, D&amp;B usa un puntaje de desempeño de pagos llamado PAYDEX. A diferencia del informe personal, no existe un informe gratuito universal por ley para empresas; muchos servicios cuestan. Revisa qué muestra cada buró de tu empresa y cómo corregir errores.</p>
<h2 id="garantia">Garantías personales</h2>
<p>Con una garantía personal, tú respondes con tu patrimonio si la empresa no paga. Es común en negocios nuevos. Antes de firmar, confirma el monto cubierto, la duración, si cubre intereses y costos, y si el prestamista reporta a tu informe personal.</p>
<h2 id="tarjetas">Tarjetas empresariales</h2>
<p>Pueden ser útiles para separar gastos y dar tarjetas a empleados, pero cuestan intereses si no pagas el saldo completo. Revisa APR, cuotas, garantía personal, a quién reportan y cómo manejan los pagos atrasados. Usa la guía <a href="/guias/evaluar-tarjeta-empresarial/">cómo evaluar una tarjeta empresarial</a>.</p>
<h2 id="lineas">Líneas de crédito</h2>
<p>Una línea de crédito te da acceso revolvente a fondos hasta un límite; pagas intereses solo sobre lo que usas, normalmente con tasa variable. Pueden estar garantizadas por activos o por el dueño. Los prestamistas suelen mirar tiempo en operación, ingresos, flujo de caja y el crédito del dueño. La SBA ofrece información general sobre <a href="${SRC.sbaLoans[1]}" rel="noopener" target="_blank">préstamos para pequeñas empresas</a>.</p>
<h2 id="apr">APR y promociones de 0 %</h2>
<p>El APR es el costo anual del crédito como tasa. Una promoción de 0 % es temporal: pregunta cuándo termina, qué tasa se aplica después y si pagar tarde la cancela. Un 0 % no elimina la obligación de pagar el capital.</p>
<h2 id="flujo">Flujo de caja y capacidad de pago</h2>
<p>La pregunta clave no es "¿me aprueban?", sino "¿puedo pagar cada mes aunque las ventas bajen?". Antes de tomar deuda, proyecta tus ingresos y gastos, calcula el pago mensual y mantén una reserva. El crédito financia tu negocio; no sustituye las ventas.</p>
<h2 id="errores">Errores frecuentes al solicitar financiamiento</h2>
<ul>
<li>Solicitar varias líneas a la vez sin entender las consultas duras.</li>
<li>Firmar una garantía personal sin leer el contrato.</li>
<li>Confiar en paquetes que prometen "crédito instantáneo" o "sin garantía personal".</li>
<li>Mezclar gastos personales y empresariales.</li>
<li>Usar una promoción de 0 % sin plan para el saldo al terminar.</li>
<li>Pedir más crédito del que tu flujo de caja soporta.</li>
</ul>
<p>Si vas a comparar opciones, empieza por las <a href="/guias/">guías</a> y, para tus propias cifras, la <a href="/herramientas/utilizacion-crediticia/">calculadora de utilización</a>.</p>
${GENERIC_WARN}
${sources(["sbaLoans", "sbaLicenses", "irsEin", "dnb", "fdicMoney", "cfpbCards", "acr"])}`),
};
