import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navegacion from './Navegacion'
import Inicio from './pages/Inicio'
import Saludo from './pages/Saludo'
import Tareas from './pages/Tareas'
import Usuarios from './pages/Usuarios'
import Reloj from './pages/Reloj'
import NoEncontrada from './pages/NoEncontrada'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mi Primera App en React
          </h1>
          
          <Navegacion />
          
          <div className="mt-8">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/saludo" element={<Saludo />} />
              <Route path="/tareas" elem