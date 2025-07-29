const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

// Servir archivos estáticos
app.use(express.static('public'))

// Conexión con sockets
io.on('connection', (socket) => {
    // Cuando un usuario se conecta
    console.log('🟢 Usuario conectado:', socket.id)

    // Escuchar mensajes del cliente
    socket.on('chat message', (msg) => {
        console.log(`💬 ${socket.id}: ${msg}`)

        // Emitir el mensaje a todos los clientes conectados
        io.emit('chat message', msg)
    })

    // Escuchar eventos de desconexión
    socket.on('disconnect', () => {
        console.log('🔴 Usuario desconectado:', socket.id)
    })
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`)
})
