class Estudiante{
    constructor(nombre, edad, curso){
        this.nombre = nombre
        this.edad = edad
        this.curso = curso
    }

    saludar(){
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y estoy en el curso de ${this.curso}.`
    }
}


class EstudianteAvanzado extends Estudiante{
    constructor(nombre, edad, curso, proyectoFinal){
        super(nombre, edad, curso)
        this.proyectoFinal = proyectoFinal
    }

    mostrarProyecto(){
        console.log(`Mi proyecto final es: ${this.proyectoFinal}`)
    }
}

const alumno1 = new EstudianteAvanzado("Juan", 20, "JavaScript", "Sistema de gestión")

alumno1.saludar()
alumno1.mostrarProyecto()