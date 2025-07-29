import React, { useState, useEffect } from 'react'

function Personajes() {
  const [contador, setContador] = useState(0)
  const [imagenUrl, setImagenUrl] = useState('')

  useEffect(() => {
    const obtenerPersonaje = async () => {
      try {
        const respuesta = await fetch(`https://thronesapi.com/api/v2/Characters/${contador}`)
        const data = await respuesta.json()
        setImagenUrl(data.imageUrl)
      } catch (error) {
        console.error('Error al obtener personaje:', error)
      }
    }
    obtenerPersonaje()
  }, [contador])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Personaje de Game of Thrones</h1>
      {imagenUrl ? (
        <img src={imagenUrl} alt="Personaje" style={{ width: '200px', height: '300px' }} />
      ) : (
        <p>No hay imagen disponible.</p>
      )}
      <button onClick={() => setContador((prev) => Math.max(0, prev - 1))}>Bajar</button>
      <button onClick={() => setContador((prev) => prev + 1)}>Subir</button>
    </div>
  )
}

export default Personajes
