import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      {/* Contenedor principal con fondo oscuro de FC 26 */}
      <div className="min-h-screen bg-slate-950 text-white font-sans">
        <Routes>
          {/* Ruta principal: carga el componente Home */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta 404: por si el usuario escribe una URL que no existe */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-4xl font-bold text-red-500">404</h1>
              <p>Esta página no existe en el club.</p>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;