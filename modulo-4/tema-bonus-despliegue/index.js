const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('¡Hola Mundo en Fly.io!')
})

app.listen(PORT, () => {
  console.log(`App corriendo en puerto ${PORT}`)
})
