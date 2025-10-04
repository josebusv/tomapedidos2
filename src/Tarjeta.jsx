function Tarjeta({ titulo, children }) {
  return (
    <div className="tarjeta-componente">
      <h2>{titulo}</h2>
      <div className="contenido">
        {children}
      </div>
    </div>
  )
}

export default Tarjeta