import { Link } from 'react-router-dom'

export default function Productos() {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <Link to="/producto/1">Ver Producto 1</Link>
    </div>
  )
}