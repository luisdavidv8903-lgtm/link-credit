/* Lógica pura de la calculadora de utilización. Sin red, sin almacenamiento. */
(function (root) {
  var MAX = 1e9;

  function toNumber(v) {
    if (v === null || v === undefined) return NaN;
    var s = String(v).trim();
    if (s === "") return NaN;
    return Number(s);
  }

  /* rows: [{balance, limit}] -> resultado o error legible. */
  function computeUtilization(rows) {
    var totalBalance = 0, totalLimit = 0, used = 0, i, b, l, blank;
    for (i = 0; i < rows.length; i++) {
      blank = String(rows[i].balance == null ? "" : rows[i].balance).trim() === "" &&
              String(rows[i].limit == null ? "" : rows[i].limit).trim() === "";
      if (blank) continue;
      b = toNumber(rows[i].balance);
      l = toNumber(rows[i].limit);
      if (!isFinite(b) || !isFinite(l)) return { ok: false, row: i, field: !isFinite(b) ? "balance" : "limit", error: "Escribe un número válido en el saldo y en el límite." };
      if (b < 0) return { ok: false, row: i, field: "balance", error: "El saldo no puede ser negativo." };
      if (l < 0) return { ok: false, row: i, field: "limit", error: "El límite no puede ser negativo." };
      if (l === 0) return { ok: false, row: i, field: "limit", error: "El límite debe ser mayor que 0." };
      if (b > MAX || l > MAX) return { ok: false, row: i, field: b > MAX ? "balance" : "limit", error: "El valor es demasiado grande. Revisa los números." };
      totalBalance += b;
      totalLimit += l;
      used++;
    }
    if (used === 0) return { ok: false, row: 0, error: "Escribe al menos un saldo y un límite." };

    var pct = totalBalance / totalLimit * 100;
    return {
      ok: true,
      cards: used,
      totalBalance: totalBalance,
      totalLimit: totalLimit,
      percent: pct,
      overLimit: totalBalance > totalLimit,
      toReach: function (target) { return Math.max(0, totalBalance - totalLimit * target / 100); }
    };
  }

  function band(pct) {
    if (pct > 100) return { key: "high", label: "Por encima del límite total" };
    if (pct > 75) return { key: "high", label: "Muy alta" };
    if (pct > 50) return { key: "high", label: "Alta" };
    if (pct > 30) return { key: "mid", label: "Moderada" };
    if (pct > 10) return { key: "low", label: "Baja" };
    return { key: "low", label: "Muy baja" };
  }

  var api = { computeUtilization: computeUtilization, band: band };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.LCCalc = api;
})(typeof self !== "undefined" ? self : this);
