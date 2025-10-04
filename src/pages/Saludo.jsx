import { useState } from 'react'
import Tarjeta from '../Tarjeta'

function Saludo() {
  const [nombre, setNombre] = useState('')
  const [saludo, setSaludo] = useState('')

  const manejarSaludo = () => {
    if (nombre.trim()) {
      setSaludo(`¡Hola, ${nombre}! Bienvenido a React 🚀`)
    }
  }

  return (
    <div>
      <h2>Formulario de Saludo</h2>
      <Tarjeta titulo="Saluda a alguien">
        <input 
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button onClick={manejarSaludo}>
          Saludar
        </button>
        {saludo && <p className="saludo">{saludo}</p>}
      </Tarjeta>
    </div>
  )
}

export default Saludo