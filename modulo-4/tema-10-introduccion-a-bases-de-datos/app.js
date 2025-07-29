const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'tienda'
})

// Crear tabla (ejemplo):
connection.query(`
  CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    precio DECIMAL(10,2)
  )
`)

// Insertar producto
connection.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)',
  ['Zapatos', 29.99],
  (err, result) => {
    if (err) throw err
    console.log('Producto insertado con ID:', result.insertId)
  }
)

// Leer productos
connection.query('SELECT * FROM productos', (err, rows) => {
  if (err) throw err
  console.log('Productos:', rows)
})
