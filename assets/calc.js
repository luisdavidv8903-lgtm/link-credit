/* Interfaz de la calculadora. No usa fetch, almacenamiento ni cookies: todo ocurre en este navegador. */
(function () {
  var rowsEl = document.getElementById("rows");
  var addBtn = document.getElementById("add");
  var form = document.getElementById("calc-form");
  var clearBtn = document.getElementById("clear");
  var errEl = document.getElementById("calc-error");
  var resEl = document.getElementById("result");
  var MAX_ROWS = 10;
  var n = 0;

  function fmtMoney(v) {
    return v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
  }
  function fmtPct(v) {
    return (Math.round(v * 10) / 10).toLocaleString("es-US", { maximumFractionDigits: 1 }) + " %";
  }

  function addRow() {
    if (rowsEl.children.length >= MAX_ROWS) return;
    n++;
    var d = document.createElement("div");
    d.className = "row";
    d.innerHTML =
      '<div class="field"><label for="b' + n + '">Saldo actual (USD)</label>' +
      '<input id="b' + n + '" name="balance" type="number" inputmode="decimal" min="0" step="any" placeholder="0.00" autocomplete="off"></div>' +
      '<div class="field"><label for="l' + n + '">Límite de crédito (USD)</label>' +
      '<input id="l' + n + '" name="limit" type="number" inputmode="decimal" min="0" step="any" placeholder="0.00" autocomplete="off"></div>' +
      '<button type="button" class="rm" aria-label="Quitar esta tarjeta">Quitar</button>';
    rowsEl.appendChild(d);
    updateRemove();
  }

  function updateRemove() {
    var rows = rowsEl.children;
    for (var i = 0; i < rows.length; i++) {
      rows[i].querySelector(".rm").classList.toggle("hidden", rows.length === 1);
    }
    addBtn.disabled = rows.length >= MAX_ROWS;
  }

  function readRows() {
    return Array.prototype.map.call(rowsEl.children, function (r) {
      return { balance: r.querySelector('[name="balance"]').value, limit: r.querySelector('[name="limit"]').value };
    });
  }

  function clearInvalid() {
    Array.prototype.forEach.call(rowsEl.querySelectorAll("input"), function (i) { i.removeAttribute("aria-invalid"); });
  }

  function showError(r) {
    resEl.classList.add("hidden");
    errEl.textContent = r.error;
    errEl.classList.remove("hidden");
    var row = rowsEl.children[r.row];
    if (row) {
      var f = row.querySelector('[name="' + (r.field || "balance") + '"]');
      f.setAttribute("aria-invalid", "true");
      f.focus();
    }
  }

  function show(r) {
    errEl.classList.add("hidden");
    errEl.textContent = "";
    var b = LCCalc.band(r.percent);
    document.getElementById("pct").textContent = fmtPct(r.percent);
    document.getElementById("band").textContent = b.label;
    document.getElementById("tb").textContent = fmtMoney(r.totalBalance);
    document.getElementById("tl").textContent = fmtMoney(r.totalLimit);
    document.getElementById("nc").textContent = r.cards;
    var bar = document.getElementById("bar");
    bar.style.width = Math.min(100, r.percent) + "%";
    bar.className = b.key === "low" ? "" : b.key;
    document.getElementById("bar-box").setAttribute("aria-valuenow", Math.round(Math.min(100, r.percent)));
    var t30 = r.toReach(30), t10 = r.toReach(10);
    var msg = "";
    if (r.overLimit) {
      msg = "Tu saldo total supera tu límite total. Eso suele indicar que conviene hablar con el emisor y priorizar este pago.";
    } else if (t30 > 0) {
      msg = "Para estar en 30 % o menos tendrías que reducir el saldo en " + fmtMoney(t30) +
        (t10 > 0 ? " (y " + fmtMoney(t10) + " para llegar a 10 %)." : ".");
    } else {
      msg = "Ya estás en 30 % o menos. " + (t10 > 0 ? "Para llegar a 10 % tendrías que reducir " + fmtMoney(t10) + "." : "Estás en 10 % o menos.");
    }
    document.getElementById("hint").textContent = msg;
    resEl.classList.remove("hidden");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearInvalid();
    var r = LCCalc.computeUtilization(readRows());
    if (!r.ok) return showError(r);
    show(r);
  });

  addBtn.addEventListener("click", addRow);
  rowsEl.addEventListener("click", function (e) {
    if (e.target.classList.contains("rm") && rowsEl.children.length > 1) {
      e.target.closest(".row").remove();
      updateRemove();
    }
  });
  clearBtn.addEventListener("click", function () {
    rowsEl.innerHTML = "";
    n = 0;
    addRow();
    errEl.classList.add("hidden");
    resEl.classList.add("hidden");
    rowsEl.querySelector("input").focus();
  });

  addRow();
})();
