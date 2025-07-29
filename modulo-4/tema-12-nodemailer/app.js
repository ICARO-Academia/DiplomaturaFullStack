const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

app.post('/register', async (req, res) => {
  const { email, nombre } = req.body
  // Aquí guardarías el usuario en DB (simulado)
  // Enviar correo de bienvenida
  await transporter.sendMail({
    from: `Soporte <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Bienvenido a nuestra plataforma',
    html: `<h1>Hola ${nombre}, gracias por registrarte</h1>`
  })
  res.json({ message: 'Usuario registrado y correo enviado' })
})

app.listen(3000, () => console.log('Servidor en http://localhost:3000'))
