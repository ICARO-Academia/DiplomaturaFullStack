const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const productos = [
  { id: 1, nombre: 'Camiseta', precio: 20 },
  { id: 2, nombre: 'Pantalón', precio: 30 }
]

app.get('/', (req, res) => {
  res.render('index', { productos })
})

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})