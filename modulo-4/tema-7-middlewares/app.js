const express = require('express')
const app = express()
const PORT = 3000

// Middleware personalizado
function checkApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key']
  if (!apiKey) {
    return res.status(401).send('API key no proporcionada')
  }
  // Podrías verificar la validez de la API key en la base de datos
  next()
}

app.get('/secret', checkApiKey, (req, res) => {
  res.send('Este es un secreto')
})

app.get('/', (req, res) => {
    res.status(200).send('¡Hola Mundo!')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
