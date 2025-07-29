// Selección de elementos
const input = document.getElementById("nuevaTarea")
const boton = document.getElementById("agregarBtn")
const lista = document.getElementById("listaTareas")

// Agrego evento al botón
boton.addEventListener("click", () => {
    // Obtengo el texto del input
    const texto = input.value.trim() // Aplico trim para eliminar espacios en blanco al inicio y al final

    // Si el texto no está vacío
    if (texto) {

        const li = document.createElement("li") // Creo un elemento li
        li.textContent = texto // Agrego el texto al li


        const btnEliminar = document.createElement("button") // Creo un botón
        btnEliminar.textContent = "Eliminar" // Agrego el texto al botón

        li.appendChild(btnEliminar) // Agrego el botón al li
        lista.appendChild(li) // Agrego el li a la lista
        input.value = "" // Limpio el input

        // 1. Cuando se elimina una tarea, debe aparecer un botón "Deshacer"
        // que permita cancelar la eliminación y la tarea debe figurar con el texto “Eliminando…”.

        // Evento para Eliminar y Deshacer
        btnEliminar.addEventListener("click", () => {

            li.removeChild(btnEliminar) // Elimina el botón "Eliminar"
            let textoTarea = li.textContent // Guardo el texto original de la tarea
            li.textContent = 'Eliminando...' // Cambio texto de la tarea

            // Crear el botón "Deshacer"
            const btnDeshacer = document.createElement("button")
            btnDeshacer.textContent = "Deshacer"

            // Agregar el botón "Deshacer" al li
            li.appendChild(btnDeshacer)

            // 2. Implementar un temporizador (setTimeout) que elimine la tarea de forma
            //  permanente después de 5 segundos si no se hace clic en "Deshacer".
            const timeoutEliminarTarea = setTimeout(() => {
                lista.removeChild(li) // Elimina la tarea permanentemente
            }, 5000) // 5 segundos

            // 3. Si el usuario hace clic en "Deshacer" antes de que termine el temporizador, la tarea no se elimina.
            // Evento para "Deshacer" la eliminación
            btnDeshacer.addEventListener("click", () => {
                clearTimeout(timeoutEliminarTarea) // Cancela la eliminación
                li.textContent = textoTarea // Restaura el texto original de la tarea
                li.appendChild(btnEliminar) // Vuelve a agregar el botón "Eliminar"
            })

        })
    }
})