export const logger = (req, res, next) => {
    console.log(`Petición: ${req.method} - ${req.url}`)
    next()
}