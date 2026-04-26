import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SBCProvider } from './context/SBCContext';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    // 1. Envolvemos todo con el Provider para el estado global
    <SBCProvider>
      {/* 2. Envolvemos con el Router para la navegación */}
      <BrowserRouter>
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SBCProvider>
  );
}

export default App;