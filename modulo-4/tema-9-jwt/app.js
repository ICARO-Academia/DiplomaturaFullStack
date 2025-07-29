const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

const SECRET = 'miClaveSecreta'

app.post('/login', (req, res) => {
  const { username, password } = req.body
  // Ejemplo: validación ficticia
  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ user: username }, SECRET, { expiresIn: '1h' })
    return res.json({ token })
  }
  res.status(401).json({ error: 'Credenciales inválidas' })
})

function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization']
  if (!authHeader) return res.status(403).json({ error: 'Token no provisto' })

  const token = authHeader.split(' ')[1]
  jwt.verify(token, SECRET, (err, userData) => {
    if (err) return res.status(403).json({ error: 'Token inválido o expirado' })
    req.user = userData
    next()
  })
}

app.get('/datos-privados', verificarToken, (req, res) => {
  res.json({ secreto: 'Este es un dato privado', user: req.user })
})

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})