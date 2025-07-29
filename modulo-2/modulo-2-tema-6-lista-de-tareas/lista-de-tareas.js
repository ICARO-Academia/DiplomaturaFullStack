// 1. Inicializa un arreglo vacio llamado tareas
const tareas = []

// 2. Agega tareas con push
tareas.push("Lavar la ropa")
tareas.push("Pasear al perro")
tareas.push("Ir al super")
tareas.push("Lavar el auto")

// 3. Eliimna la última tarea con pop
tareas.pop()

// 4. Muestra todas las tareas usando forEach
tareas.forEach(tarea => console.log(tarea))