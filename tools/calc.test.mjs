// node tools/calc.test.mjs — comprueba la lógica de la calculadora (sin dependencias).
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const { computeUtilization: c, band } = createRequire(import.meta.url)("../assets/calc-core.js");

const ok = (rows) => { const r = c(rows); assert.equal(r.ok, true, JSON.stringify(r)); return r; };
const bad = (rows, field) => { const r = c(rows); assert.equal(r.ok, false); if (field) assert.equal(r.field, field); return r; };

let r = ok([{ balance: "400", limit: "2000" }, { balance: "600", limit: "3000" }]);
assert.equal(r.totalBalance, 1000); assert.equal(r.totalLimit, 5000); assert.equal(r.percent, 20); assert.equal(r.cards, 2);
r = ok([{ balance: "0", limit: "1000" }]); assert.equal(r.percent, 0);
r = ok([{ balance: "1200", limit: "1000" }]); assert.equal(r.percent, 120); assert.equal(r.overLimit, true);
r = ok([{ balance: "", limit: "" }, { balance: "300", limit: "1000" }]); assert.equal(r.cards, 1); // fila vacía se omite
r = ok([{ balance: "600", limit: "2000" }]); assert.equal(Math.round(r.toReach(30)), 0); assert.equal(Math.round(r.toReach(10)), 400);
r = ok([{ balance: "1500", limit: "3000" }]); assert.equal(Math.round(r.toReach(30)), 600);

bad([{ balance: "-5", limit: "1000" }], "balance");   // saldo negativo
bad([{ balance: "5", limit: "-1000" }], "limit");     // límite negativo
bad([{ balance: "5", limit: "0" }], "limit");         // límite cero
bad([{ balance: "abc", limit: "1000" }], "balance");  // no numérico
bad([{ balance: "5", limit: "" }], "limit");          // límite faltante con saldo
bad([{ balance: "1e12", limit: "1000" }], "balance");          // valor absurdo
bad([{ balance: "", limit: "" }]);                    // sin datos
bad([]);

assert.equal(band(5).key, "low"); assert.equal(band(20).key, "low");
assert.equal(band(40).key, "mid"); assert.equal(band(80).key, "high"); assert.equal(band(150).key, "high");
console.log("calc.test OK");
