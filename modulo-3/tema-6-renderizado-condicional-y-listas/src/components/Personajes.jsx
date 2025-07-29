import { useState, useEffect } from 'react'

function Personajes() {
  const [personajes, setPersonajes] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const respuesta = await fetch('https://thronesapi.com/api/v2/Characters')
        const data = await respuesta.json()
        setPersonajes(data)
        setCargando(false) // Al finalizar la petición, cambiamos el estado de cargando a false
      } catch (error) {
        console.error('Error al obtener personajes:', error)
      }
    }
    obtenerPersonajes()
  }, [])

  return (
    <div>
      {cargando ? (
        <p>Cargando datos...</p>
      ) : (
        <ul>
          {personajes.map((personaje) => (
            <li key={personaje.id}>
              <h3>{personaje.fullName}</h3>
              <img src={personaje.imageUrl} alt={personaje.fullName} style={{ width: '100px' }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Personajes