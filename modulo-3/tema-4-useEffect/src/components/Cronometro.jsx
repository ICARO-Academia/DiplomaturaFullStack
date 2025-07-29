import {useState, useEffect} from 'react'

export default function Cronometro(){
     const [contador, setContador] = useState(0)

  useEffect(() => {
    // Inicializamos un intervalo que actualiza el contador cada segundo
    const intervalo = setInterval(() => {
      setContador((prevContador) => prevContador + 1)
    }, 1000)

    // Limpiamos el intervalo al desmontarse el componente
    return () => {
      clearInterval(intervalo)
      console.log('Componente desmontado, intervalo limpiado')
    }
  }, []) // Dependencias vacías: solo se ejecuta al montar y desmontar

    return (
        <div>
            <h1>Cronometro</h1>
            <p>Tiempo transcurrido: {contador} segundos</p>
        </div>
    )
}