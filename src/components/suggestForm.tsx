import React, { useState } from 'react';

export const SuggestForm: React.FC = () => {
  // Estados controlados para los inputs y mensajes
  const [target, setTarget] = useState<string>('');
  const [players, setPlayers] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  // Manejador del envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setError('');
    setSuccess(false);

    // Validación básica que pide el profesor
    const targetNum = parseInt(target);
    if (!target || isNaN(targetNum) || targetNum < 85 || targetNum > 90) {
      setError('Por favor, introduce una media válida (entre 85 y 90).');
      return;
    }
    if (players.trim().length < 5) {
      setError('La descripción de los jugadores es muy corta.');
      return;
    }

    // Si todo va bien, mostramos mensaje de éxito y limpiamos
    setSuccess(true);
    setTarget('');
    setPlayers('');
  };

  return (
    <div className="mt-12 w-full max-w-md bg-slate-800 p-6 rounded-xl border border-slate-700">
      <h3 className="text-xl font-bold text-yellow-500 mb-4 text-center">¿Conoces una receta mejor?</h3>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-slate-300 text-sm mb-1">Media del SBC (85-90)</label>
          <input 
            type="number" 
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-full p-2 rounded bg-slate-900 border border-slate-600 text-white focus:border-yellow-500 focus:outline-none"
            placeholder="Ej: 86"
          />
        </div>

        <div>
          <label className="block text-slate-300 text-sm mb-1">Jugadores requeridos</label>
          <input 
            type="text" 
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
            className="w-full p-2 rounded bg-slate-900 border border-slate-600 text-white focus:border-yellow-500 focus:outline-none"
            placeholder="Ej: 2x87, 9x85"
          />
        </div>

        {/* Mensajes de feedback */}
        {error && <p className="text-red-400 text-sm bg-red-400/10 p-2 rounded">{error}</p>}
        {success && <p className="text-green-400 text-sm bg-green-400/10 p-2 rounded">¡Gracias! Receta enviada a revisión.</p>}

        <button type="submit" className="mt-2 bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400 transition-colors">
          Enviar Sugerencia
        </button>
      </form>
    </div>
  );
};