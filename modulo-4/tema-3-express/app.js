const express = require('express')
const app = express()

app.listen(3000, () => console.log('Servidor en puerto http://localhost:3000'))

// Rutas
app.get('/', (req, res) => res.send('Bienvenido a mi API'))

app.get('/users', (req, res) => {
    const usuarios = [
        { id: 1, nombre: 'Ana' },
        { id: 2, nombre: 'Juan' }
    ]
    res.json(usuarios)
})

exports = app