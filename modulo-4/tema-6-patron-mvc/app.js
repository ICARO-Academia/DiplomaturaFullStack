// app.js
const express = require('express')
const bodyParser = require('body-parser')
const contactRoutes = require('./routes/contactRoutes.js')

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(bodyParser.json())

// Montar rutas bajo /api
app.use('/api', contactRoutes)

// 404 para rutas no definidas
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint no encontrado' })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})