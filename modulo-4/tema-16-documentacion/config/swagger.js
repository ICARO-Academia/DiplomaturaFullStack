const swagger = require('swagger-jsdoc')

exports.swaggerSpec = swagger({
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'API de Usuarios',
            version: '1.0.0',
            description: 'Documentación de la API para gestionar usuarios',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            }
        ]
    },
    apis: ['./routes/*.js', './controller/*.js'],
})