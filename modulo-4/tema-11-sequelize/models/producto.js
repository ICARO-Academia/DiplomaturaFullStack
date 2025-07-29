// models/producto.js
module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
        nombre: DataTypes.STRING,
        precio: DataTypes.DECIMAL
    }, {})
    return Producto
}