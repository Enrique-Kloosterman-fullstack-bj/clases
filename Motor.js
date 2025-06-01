// Definimos la clase Motor
export class Motor {
  constructor(fabricante) {
    this.fabricante = fabricante;
  }
  getEstado() {
    return `Motor fabricado por ${this.fabricante}`;
  }
}
