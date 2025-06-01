import { Automovil } from "./Automovil.js";

export class Electrico extends Automovil {
  constructor(marca, modelo, cargaDeBateria, tiempoDeCarga, motor) {
    super(marca, modelo, motor);
    this.cargaDeBateria = cargaDeBateria;
    this.tiempoDeCarga = tiempoDeCarga;
  }

  cargar() {
    if (this.cargaDeBateria < 100) {
      this.cargaDeBateria += 10;
      console.log(`El auto se ha cargado a ${this.cargaDeBateria}%`);
    }
  }
}
