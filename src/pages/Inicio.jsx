function Inicio() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Bienvenido a React con Tailwind CSS
        </h2>
        <p className="text-gray-600 text-lg">
          Esta aplicación demuestra el poder de React + Tailwind
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            🚀 React
          </h3>
          <p className="text-gray-700">
            Una biblioteca de JavaScript para construir interfaces de usuario modernas y dinámicas.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-purple-600 mb-3">
            🎨 Tailwind CSS
          </h3>
          <p className="text-gray-700">
            Un framework de CSS de utilidades que te permite diseñar rápidamente sin salir del HTML.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-green-600 mb-3">
            🔀 React Router
          </h3>
          <p className="text-gray-700">
            Navegación entre páginas sin recargar el navegador, creando una experiencia fluida.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-orange-600 mb-3">
            🌐 APIs
          </h3>
          <p className="text-gray-700">
            Conexión con servicios externos para obtener y mostrar datos en tiempo real.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">
          ¡Explora la aplicación!
        </h3>
        <p>
          Usa el menú de navegación para ver todas las funcionalidades
        </p>
      </div>
    </div>
  )
}

export default Inicio