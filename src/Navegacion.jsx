import { NavLink } from 'react-router-dom'

function Navegacion() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg mb-8 p-4">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md font-medium transition-all ${
              isActive 
                ? 'bg-white text-blue-600 shadow-md' 
                : 'text-white hover:bg-white/20'
            }`
          }
        >
          Inicio
        </NavLink>
        <NavLink 
          to="/saludo" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md font-medium transition-all ${
              isActive 
                ? 'bg-white text-blue-600 shadow-md' 
                : 'text-white hover:bg-white/20'
            }`
          }
        >
          Saludo
        </NavLink>
        <NavLink 
          to="/tareas" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md font-medium transition-all ${
              isActive 
                ? 'bg-white text-blue-600 shadow-md' 
                : 'text-white hover:bg-white/20'
            }`
          }
        >
          Tareas
        </NavLink>
        <NavLink 
          to="/usuarios" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md font-medium transition-all ${
              isActive 
                ? 'bg-white text-blue-600 shadow-md' 
                : 'text-white hover:bg-white/20'
            }`
          }
        >
          Usuarios
        </NavLink>
        <NavLink 
          to="/reloj" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md font-medium transition-all ${
              isActive 
                ? 'bg-white text-blue-600 shadow-md' 
                : 'text-white hover:bg-white/20'
            }`
          }
        >
          Reloj
        </NavLink>
      </div>
    </nav>
  )
}

export default Navegacion