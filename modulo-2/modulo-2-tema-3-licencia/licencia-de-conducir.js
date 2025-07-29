let edad = parseInt(prompt("¿Cuál es tu edad?"))
let tieneLicencia = prompt("¿Tienes licencia de conducir? (si/no)").toLowerCase()

if (edad < 18 ) {
    alert("No puedes conducir.")
} else if(edad >= 18 && tieneLicencia === "si") {
    alert("Puedes conducir.")
} else{
    alert("No puedes conducir.")
}