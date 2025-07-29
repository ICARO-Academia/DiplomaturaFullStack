const calcularAreaRectangulo = (base, altura) => base * altura

const calcularAreaTriangulo = (base, altura) => calcularAreaRectangulo(base,altura) / 2


let base = parseFloat(prompt("Ingresa la base:"))
let altura = parseFloat(prompt("Ingresa la altura:"))
alert("El área del rectángulo es: " + calcularAreaRectangulo(base, altura))
alert("El área del triángulo es: " + calcularAreaTriangulo(base, altura))