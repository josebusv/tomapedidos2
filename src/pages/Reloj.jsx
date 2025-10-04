import { useState, useEffect } from 'react'
import Tarjeta from '../Tarjeta'

function Reloj() {
  const [hora, setHora] = useState(new Date())
  const [contador, setContador] = useState(0)
  const [activo, setActivo] = useState(false)

  // Reloj en tiempo real
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date())
    }, 1000)

    // Cleanup: limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo)
  }, [])

  // Contador con control
  useEffect(() => {
    let intervalo
    if (activo) {
      intervalo = setInterval(() => {
        setContador(c => c + 1)
      }, 1000)
    }
    return () => clearInterval(intervalo)
  }, [activo])

  const toggleContador = () => {
    setActivo(!activo)
  }

  const reiniciarContador = () => {
    setContador(0)
    setActivo(false)
  }

  return (
    <div>
      <h2>Reloj y Contador</h2>
      
      <Tarjeta titulo="Reloj en Tiempo Real">
        <p style={{ fontSize: '2rem', textAlign: 'center', margin: '1rem 0' }}>
          {hora.toLocaleTimeString()}
        </p>
      </Tarjeta>

      <Tarjeta titulo="Contador">
        <p style={{ fontSize: '3rem', textAlign: 'center', margin: '1rem 0', color: '#646cff' }}>
          {contador}
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={toggleContador}>
            {activo ? 'Pausar' : 'Iniciar'}
          </button>
          <button onClick={reiniciarContador}>
            Reiniciar
          </button>
        </div>
      </Tarjeta>
    </div>
  )
}

export default Reloj