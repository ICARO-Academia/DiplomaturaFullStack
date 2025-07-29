// Clase base
class Vehiculo {
  constructor(marca, modelo, año) {
      this.marca = marca
      this.modelo = modelo
      this.año = año
  }

  detalles() {
      console.log(`Vehículo: ${this.marca} ${this.modelo}, Año: ${this.año}`)
  }
}

// Clase hija: Auto
class Auto extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
      super(marca, modelo, año)
      this.puertas = puertas
  }

  detalles() {
      console.log(`Auto: ${this.marca} ${this.modelo}, Año: ${this.año}, Puertas: ${this.puertas}`)
  }
}

// Clase hija: Moto
class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
      super(marca, modelo, año)
      this.cilindrada = cilindrada
  }

  detalles() {
      console.log(`Moto: ${this.marca} ${this.modelo}, Año: ${this.año}, Cilindrada: ${this.cilindrada}cc`)
  }
}

// Clase independiente: Camion
class Camion extends Vehiculo {
  constructor(marca, modelo, año, capacidad) {
      super(marca, modelo, año)
      this.capacidad = capacidad
  }

  cargar() {
      console.log(`El camión ${this.marca} ${this.modelo} está cargando ${this.capacidad} toneladas.`)
  }

  detalles() {
      console.log(`Camión: ${this.marca} ${this.modelo}, Año: ${this.año}, Capacidad: ${this.capacidad} toneladas.`)
  }
}

// Instancias
const auto1 = new Auto("Toyota", "Corolla", 2022, 4)
const moto1 = new Moto("Yamaha", "MT-09", 2021, 900)
const camion1 = new Camion("Mercedes", "Actros", 2020, 18)

// Almacenar en un arreglo
const vehiculos = [auto1, moto1, camion1]

// Iterar e imprimir detalles
vehiculos.forEach((vehiculo) => {
  vehiculo.detalles()
})

// Llamada adicional al método cargar del camión
camion1.cargar()
