import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

// Componentes
import Nav from './components/common/Nav'
// Páginas
import Home from './components/pages/Home'
import Productos from './components/pages/Productos'
import Producto from './components/pages/Producto'
import Contacto from './components/pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
