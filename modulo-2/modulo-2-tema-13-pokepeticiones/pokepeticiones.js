document.getElementById("buscarBtn").addEventListener("click", async () => {
    const nombre = document.getElementById("nombrePokemon").value.toLowerCase()
    const resultado = document.getElementById("resultado")
    resultado.textContent = "Cargando..."

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        if (!respuesta.ok) throw new Error("Pokémon no encontrado")

        const data = await respuesta.json()
        resultado.innerHTML = `
            <h2>Nombre: ${data.name}</h2>
            <p>Peso: ${data.weight}</p>
            <p>Habilidades: ${data.abilities.map(a => a.ability.name).join(", ")}</p>
        `
    } catch (error) {
        resultado.textContent = "Error: Pokémon no encontrado"
    }
})