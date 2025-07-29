// index.js
const db = require('./models')

async function main() {
  try {
    // 1) Sincronizar la base de datos
    //    Crea las tablas si no existen o ajusta la estructura
    await db.sequelize.sync()

    // 2) CREATE: Insertar un nuevo producto
    const productoA = await db.Producto.create({ nombre: 'Camisa', precio: 19.99 })
    const productoB = await db.Producto.create({ nombre: 'Pantalón', precio: 39.99 })

    console.log('Productos creados:', productoA.toJSON(), productoB.toJSON())

    // 3) READ: Obtener todos los productos
    const productos = await db.Producto.findAll()
    console.log('Lista de Productos:', productos.map(prod => prod.toJSON()))

    // 4) UPDATE: Actualizar un producto
    const [numActualizados] = await db.Producto.update(
      { precio: 29.99 },
      { where: { id: productoA.id } }
    )
    if (numActualizados > 0) {
      console.log(`Se actualizó el producto con id ${productoA.id} a precio 29.99`)
    }

    // Para verificar la actualización:
    const productoActualizado = await db.Producto.findByPk(productoA.id)
    console.log('Producto Actualizado:', productoActualizado.toJSON())

    // 5) DELETE: Eliminar un producto
    await db.Producto.destroy({ where: { id: productoB.id } })
    console.log(`Producto con id ${productoB.id} eliminado`)

    // Para verificar, volvemos a listar productos:
    const productosFinales = await db.Producto.findAll()
    console.log('Productos tras borrar:', productosFinales.map(prod => prod.toJSON()))

  } catch (error) {
    console.error('Error en la operación:', error)
  } finally {
    // Cerrar conexión
    await db.sequelize.close()
  }
}

main()
