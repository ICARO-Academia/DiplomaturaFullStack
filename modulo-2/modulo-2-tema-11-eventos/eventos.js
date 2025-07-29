// Evento click
const boton = document.getElementById("boton")
boton.addEventListener("click", () => {
  alert("¡Botón clickeado!")
})

// Evento input
const entrada = document.getElementById("entrada")
entrada.addEventListener("input", (e) => {
  console.log(`Texto ingresado: ${e.target.value}`)
})

// Evento mouseover y mouseout
const caja = document.getElementById("caja")
caja.addEventListener("mouseover", () => {
  caja.style.backgroundColor = "lightgreen"
})

caja.addEventListener("mouseout", () => {
  caja.style.backgroundColor = "lightblue"
})