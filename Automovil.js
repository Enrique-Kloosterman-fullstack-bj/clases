// Importamaos la clase Motor
import { Motor } from "./Motor.js";
// Definimos la clase Automovil
export class Automovil {
  constructor(marca, modelo, motor) {
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = false;
    this.velocidad = 0;
    this.motor = new Motor(motor); // Le Pasamos el motor por "Composición"
    this.radio = null; // Inicialmente no tiene radio (se la pasamos por "Agregación")
  }

  encender() {
    if (!this.encendido) {
      this.motor.arrancar();
      this.encendido = true;
      console.log("El auto se ha encendido");
    }
  }

  apagar() {
    if (this.encendido) {
      this.motor.detener();
      this.encendido = false;
      this.velocidad = 0;
      console.log("El auto se ha apagado");
    }
  }

  acelerar() {
    if (this.encendido && this.motor.getEstado()) {
      this.velocidad += 10;
      console.log(`El auto se ha acelerado a ${this.velocidad} km/h`);
    }
  }

  frenar() {
    if (this.encendido) {
      this.velocidad -= 10;
      if (this.velocidad < 0) {
        this.velocidad = 0;
      }
      console.log(`El auto se ha frenado a ${this.velocidad} km/h`);
    }
  }

  instalarRadio(radio) {
    this.radio = radio;
    console.log(
      `Se ha instalado una radio ${radio.marca} en el ${this.marca} ${this.modelo}`
    );
  }

  navegar(gps, destino) {
    gps.establecerDestino(destino); // Establecemos el destino en el gps
    console.log(`El auto se está navegando hacia ${destino}`);
  }
}
