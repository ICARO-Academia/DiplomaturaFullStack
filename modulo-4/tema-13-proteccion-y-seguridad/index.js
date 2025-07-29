const express = require('express')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const app = express()

app.use(express.json())

app.post('/register',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    const hashed = await bcrypt.hash(password, 10)
    // guardar { email, password: hashed } en DB
    res.json({ message: 'Usuario registrado con éxito' })
  }
)

app.listen(3000, () => console.log('Servidor en http://localhost:3000'))