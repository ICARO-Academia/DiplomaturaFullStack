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
        btnEliminar.addEventListener("click", () => li.remove()) // Agrego evento al botón para eliminar el li

        li.appendChild(btnEliminar) // Agrego el botón al li
        lista.appendChild(li) // Agrego el li a la lista
        input.value = "" // Limpio el input
    }
})