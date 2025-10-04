import { useState, useEffect } from 'react'
import Tarjeta from '../Tarjeta'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsuarios(data)
        setCargando(false)
      })
      .catch(err => {
        setError('Error al cargar usuarios')
        setCargando(false)
      })
  }, [])

  if (cargando) return <div><h2>Cargando usuarios...</h2></div>
  if (error) return <div><h2>{error}</h2></div>

  return (
    <div>
      <h2>Lista de Usuarios (API)</h2>
      <p style={{ textAlign: 'center', color: '#666' }}>
        Datos obtenidos de una API externa
      </p>
      {usuarios.map(usuario => (
        <Tarjeta key={usuario.id} titulo={usuario.name}>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Ciudad:</strong> {usuario.address.city}</p>
          <p><strong>Empresa:</strong> {usuario.company.name}</p>
        </Tarjeta>
      ))}
    </div>
  )
}

export default Usuarios