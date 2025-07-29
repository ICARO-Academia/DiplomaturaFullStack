let limite = parseInt(prompt("Ingresa un número:"))

for (let i = 1; i <= limite; i++){
    if (i % 2 === 0) {
        console.log(`${i} es par`)
    } else {
        console.log(`${i} es impar`)
    }
}