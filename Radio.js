// Definimos la clase Radio
export class Radio {
  constructor(marca, potencia) {
    this.marca = marca;
    this.potencia = potencia;
    this.encendida = false;
    this.volumen = 5;
  }

  encender() {
    if (!this.encendida) {
      this.encendida = true;
      console.log(`Radio ${this.marca} encendida`);
    }
  }

  apagar() {
    if (this.encendida) {
      this.encendida = false;
      console.log(`Radio ${this.marca} apagada`);
    }
  }

  subirVolumen() {
    if (this.encendida && this.volumen < 10) {
      this.volumen += 1;
      console.log(`Volumen: ${this.volumen}`);
    }
  }

  bajarVolumen() {
    if (this.encendida && this.volumen > 0) {
      this.volumen -= 1;
      console.log(`Volumen: ${this.volumen}`);
    }
  }
}
