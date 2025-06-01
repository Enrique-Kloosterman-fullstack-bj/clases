# Sistema de Gestión de Automóviles

Este proyecto es una aplicación de JavaScript que implementa un sistema orientado a objetos para la gestión de automóviles, demostrando conceptos fundamentales de la Programación Orientada a Objetos (POO) como herencia, composición, agregación y asociación.

## Estructura del Proyecto

El proyecto está organizado en varios archivos JavaScript, cada uno representando una clase específica:

- `Automovil.js`: Clase base que define las propiedades y comportamientos comunes de todos los automóviles.
- `Electrico.js`: Clase derivada que extiende Automovil para representar vehículos eléctricos.
- `Combustion.js`: Clase derivada que extiende Automovil para representar vehículos de combustión interna.
- `Motor.js`: Clase que representa el motor de un automóvil (relación de composición).
- `Radio.js`: Clase que representa un sistema de radio que puede instalarse en un automóvil (relación de agregación).
- `GPS.js`: Clase que representa un sistema de navegación GPS que puede utilizarse con un automóvil (relación de asociación).
- `index.js`: Archivo principal que crea instancias y demuestra la interacción entre las diferentes clases.

## Conceptos de POO Implementados

### Herencia

El proyecto demuestra la herencia a través de las clases `Electrico` y `Combustion` que extienden la clase base `Automovil`. Cada una añade propiedades y métodos específicos:

- **Electrico**: Añade propiedades como `cargaDeBateria` y `tiempoDeCarga`, y métodos como `cargar()`.
- **Combustion**: Añade propiedades como `tipoDeCombustible` y `capacidadDelTanque`, y métodos como `llenarTanque()`.

### Composición

La relación entre `Automovil` y `Motor` es un ejemplo de composición. El motor es una parte intrínseca del automóvil y se crea cuando se crea el automóvil. Si el automóvil se destruye, el motor también.

```javascript
this.motor = new Motor(motor); // Composición
```

### Agregación

La relación entre `Automovil` y `Radio` es un ejemplo de agregación. La radio es un objeto que puede existir independientemente del automóvil, pero se puede agregar al automóvil como una propiedad.

```javascript
this.radio = null; // Inicialmente no tiene radio

instalarRadio(radio) {
    this.radio = radio;
    console.log(`Se ha instalado una radio ${radio.marca} en el ${this.marca} ${this.modelo}`);
}
```

### Asociación

La relación entre `Automovil` y `GPS` es un ejemplo de asociación. El GPS es completamente independiente del automóvil y no se almacena como una propiedad. En su lugar, se pasa como parámetro a los métodos que lo necesitan.

```javascript
navegar(gps, destino){
    gps.establecerDestino(destino);
    console.log(`El auto se está navegando hacia ${destino}`);
}
```

## Cómo Usar

Para ejecutar la aplicación, asegúrate de tener Node.js instalado y ejecuta:

```bash
node index.js
```

Esto creará instancias de automóviles eléctricos y de combustión, instalará radios en ellos y demostrará la navegación con GPS.

## Ejemplo de Uso

```javascript
// Crear automóviles
const autoElectrico = new Electrico("Tesla", "Model S", 0, 120, "Tesla Company");
const autoCombustion = new Combustion("Ford", "Mustang", "Gasolina", "42", "Ford Company");

// Crear accesorios
const radio = new Radio("Sony", "10W");
const gps = new GPS("Nokia", "3310");

// Instalar radio (agregación)
autoElectrico.instalarRadio(radio);

// Usar GPS (asociación)
autoCombustion.navegar(gps, "Av. Siempreviva 742");
```

## Requisitos

- Node.js (para ejecutar JavaScript fuera del navegador)
- ES Modules (el proyecto utiliza la sintaxis de importación/exportación de ES6)


## Licencia

Este proyecto está disponible como código abierto bajo los términos de la licencia MIT.

        
