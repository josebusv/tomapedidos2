import { Link } from 'react-router-dom'
import Tarjeta from '../Tarjeta'

function NoEncontrada() {
  return (
    <div>
      <h2>404 - Página No Encontrada</h2>
      <Tarjeta titulo="¡Oops!">
        <p>Lo sentimos, la página que buscas no existe.</p>
        <p>
          <Link to="/" style={{ color: '#646cff', textDecoration: 'underline' }}>
            Volver al inicio
          </Link>
        </p>
      </Tarjeta>
    </div>
  )
}

export default NoEncontrada