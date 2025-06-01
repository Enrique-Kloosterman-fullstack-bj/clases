import { Electrico } from "./Electrico.js";
import { Combustion } from "./Combustion.js";
import { Radio } from "./Radio.js";

const autoElectrico = new Electrico(
  "Tesla",
  "Model S",
  0,
  120,
  "Tesla Company"
);
const autoCombustion = new Combustion(
  "Ford",
  "Mustang",
  "Gasolina",
  "42",
  "Ford Company"
);

const radio = new Radio("Sony", "10W");
const radio2 = new Radio("JBL", "5W");

const gps = new GPS("Nokia", "3310");

autoElectrico.instalarRadio(radio);
autoCombustion.navegar(gps, "Av. Siempreviva 742");
autoCombustion.instalarRadio(radio2);

console.log(autoElectrico);
console.log(autoCombustion);
