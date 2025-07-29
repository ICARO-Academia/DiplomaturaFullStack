import { Link } from 'react-router-dom'



export default function Nav() {
  return  <nav>
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
}
