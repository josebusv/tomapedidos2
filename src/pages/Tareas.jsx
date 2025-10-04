function Tarjeta({ titulo, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
        {titulo}
      </h2>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  )
}

export default Tarjeta