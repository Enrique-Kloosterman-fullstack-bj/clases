import { Automovil } from "./Automovil.js";

export class Combustion extends Automovil {
  constructor(marca, modelo, tipoDeCombustible, capacidadDelTanque, motor) {
    super(marca, modelo, motor);
    this.tipoDeCombustible = tipoDeCombustible;
    this.capacidadDelTanque = capacidadDelTanque;
  }
  llenarTanque() {
    if (this.capacidadDelTanque < 100) {
      this.capacidadDelTanque += 10;
      console.log(
        `El auto se ha llenado el tanque a ${this.capacidadDelTanque}%`
      );
    }
  }
}
