import React, { useState } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)

  const resetear = () => setContador(0)

  return (
    <div>
      <p style={{ color: contador > 0 ? 'green' : 'red' }}>
        El contador está en: {contador}
      </p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={resetear}>Resetear</button>
    </div>
  )
}

export default Contador
