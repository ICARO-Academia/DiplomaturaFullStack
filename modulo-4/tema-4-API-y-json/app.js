const express = require('express')
const app = express()
app.use(express.json())

let productos = []

app.get('/productos', (req, res) => {
  res.json(productos)
})

app.post('/productos', (req, res) => {
  const nuevoProducto = req.body
  nuevoProducto.id = productos.length + 1
  productos.push(nuevoProducto)
  res.status(201).json(nuevoProducto)
})

app.put('/productos/:id', (req, res) => {
  const { id } = req.params
  const datosActualizados = req.body
  let producto = productos.find(p => p.id == id)
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' })
  }
  producto = { ...producto, ...datosActualizados }
  productos = productos.map(p => (p.id == id ? producto : p))
  res.json(producto)
})

app.delete('/productos/:id', (req, res) => {
  const { id } = req.params
  const indice = productos.findIndex(p => p.id == id)
  if (indice === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' })
  }
  productos.splice(indice, 1)

  // Actualizar los IDs de los productos restantes
  productos = productos.map((p, index) => ({ ...p, id: index + 1 }))

  res.json({ message: 'Producto eliminado' })
})

app.listen(3000, () => console.log('API ejecutándose en http://localhost:3000'))
