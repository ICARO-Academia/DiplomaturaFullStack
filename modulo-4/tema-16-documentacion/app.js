// app.js
const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes.js')

// Documentación Swagger
const swaggerUI = require('swagger-ui-express')
const swagger = require('swagger-jsdoc')
//const { swaggerSpec } = require('./config/swagger.js')

// Middleware de logging
const winston = require('winston')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(bodyParser.json())

// Montar rutas bajo /api
// app.use('/api', userRoutes)

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'blue',
  debug: 'green'
})

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({                   // añade timestamp ISO
      format: 'YYYY-MM-DD HH:mm:ss'              // formato opcional
    }),
    winston.format.printf(({ level, message, timestamp }) => `${timestamp} - [${level}] ${message}`)
  ),
  transports: [ new winston.transports.Console() ]
})

app.use(morgan('tiny', { stream: { write: msg => logger.info(msg.trim()) } }))

const swaggerSpec = swagger({
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'API de PING',
            version: '1.0.0',
            description: 'Documentación de la API para mostrar PING',
        },
        servers: [
            {
                url: 'http://localhost:3000/',
            }
        ]
    },
    apis: ['./app.js'],
})

// Documentación Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

/**
 * @openapi
 * /ping:
 *  get:
 *    summary: Listar todos los usuarios
 *    responses:
 *      '200':
 *        description: Ping
 */
app.get('/ping', (_req, res) => {
  logger.info('Received ping request')
  logger.error('This is an error log')
  logger.warn('This is a warning log')
  logger.debug('This is a debug log')
  return res.send('pong')
})


// 404 para rutas no definidas
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint no encontrado' })
})

// Iniciar servidor
app.listen(PORT, () => {
  logger.info(`Server listening at http://localhost:${PORT}`)
})