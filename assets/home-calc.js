/* Calculadora rápida del inicio: usa la misma lógica validada. Sin red ni almacenamiento. */
(function () {
  var b = document.getElementById("qb"), l = document.getElementById("ql");
  var out = document.getElementById("qpct"), help = document.getElementById("qhelp");
  function run() {
    var r = LCCalc.computeUtilization([{ balance: b.value, limit: l.value }]);
    if (!r.ok) { out.textContent = "—"; help.textContent = r.error; return; }
    out.textContent = (Math.round(r.percent * 10) / 10).toLocaleString("es-US", { maximumFractionDigits: 1 }) + " %";
    help.textContent = r.overLimit ? "El saldo supera el límite. Verifica los datos." : "Porcentaje matemático; no predice aprobación ni puntaje.";
  }
  b.addEventListener("input", run);
  l.addEventListener("input", run);
  document.getElementById("qform").addEventListener("submit", function (e) { e.preventDefault(); run(); });
  run();
})();
