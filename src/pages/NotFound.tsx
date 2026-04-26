import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-6xl font-black text-red-500 mb-4">404</h1>
      <h2 className="text-2xl text-white mb-6">Página no encontrada</h2>
      <p className="text-slate-400 mb-8">Parece que esta plantilla ha sido descartada.</p>
      <Link to="/" className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400">
        Volver al inicio
      </Link>
    </div>
  );
};