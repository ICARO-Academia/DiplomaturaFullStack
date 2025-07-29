import { useParams } from 'react-router-dom'

export default function Producto() {
  const { id } = useParams()
  return <h1>Detalles del Producto {id}</h1>
}