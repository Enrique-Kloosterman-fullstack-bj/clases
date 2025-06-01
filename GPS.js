// Definimos la clase GPS
export class GPS {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.destino = null;
  }

  establecerDestino(destino) {
    console.log(`Destino establecido: ${destino}`);
  }
}
