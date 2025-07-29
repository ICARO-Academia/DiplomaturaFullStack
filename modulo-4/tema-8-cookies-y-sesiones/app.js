// app.js
const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())

// Configuración de la sesión
app.use(session({
  secret: 'miFraseSecreta', // clave para firmar la cookie
  resave: false,
  saveUninitialized: false,
  cookie: {
    // Opciones de la cookie que identificará la sesión
    httpOnly: true,        // Evita que sea accesible vía JavaScript en el cliente
    secure: false,         // Debe ser 'true' si usas HTTPS en producción
    maxAge: 1000 * 60 * 60 // 1 hora de duración
  }
}))

// Ruta de login (POST) que crea la sesión
app.post('/login', (req, res) => {
  const { username, password } = req.body

  // Ejemplo de autenticación ficticia
  if (username === 'admin' && password === '1234') {
    // Guardamos datos en la sesión
    req.session.user = {
      username: 'admin',
      role: 'administrator'
    }
    return res.json({ message: 'Login exitoso' })
  } else {
    return res.status(401).json({ error: 'Credenciales inválidas' })
  }
})

// Ruta que verifica si el usuario está logueado
app.get('/perfil', (req, res) => {
  if (req.session.user) {
    // El usuario tiene datos de sesión (está logueado)
    return res.json({
      message: 'Perfil del usuario',
      user: req.session.user
    })
  } else {
    return res.status(401).json({ error: 'No has iniciado sesión' })
  }
})

// Ruta para cerrar sesión
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ error: 'Error al cerrar sesión' })
    }
    // Opción 1: Eliminar manualmente la cookie de la respuesta
    res.clearCookie('connect.sid')
    // Opción 2: Dejar que la cookie caduque sola según maxAge
    return res.json({ message: 'Sesión terminada. ¡Hasta pronto!' })
  })
})

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000')
})
