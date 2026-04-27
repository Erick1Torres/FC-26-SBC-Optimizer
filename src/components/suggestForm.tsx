import React, { useState } from 'react';
import { postSuggestion } from '../api/cliente';

// añado una "prop" para que el formulario le avise a la Home que hay datos nuevos
interface SuggestFormProps {
  onSuccess: () => void;
}

export const SuggestForm: React.FC<SuggestFormProps> = ({ onSuccess }) => {
  const [target, setTarget] = useState<string>('');
  const [players, setPlayers] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const targetNum = parseInt(target);
    if (!target || isNaN(targetNum) || targetNum < 85 || targetNum > 90) {
      setError('Por favor, introduce una media válida (entre 85 y 90).');
      return;
    }
    if (players.trim().length < 5) {
      setError('La descripción de los jugadores es muy corta.');
      return;
    }

    try {
      setIsSending(true);
      // aqui lo envio al servidor
      await postSuggestion(targetNum, players);
      
      setSuccess(true);
      setTarget('');
      setPlayers('');
      // Aviso al Home para que recargue la lista de abajo
      onSuccess();
    } catch (err) {
      setError('No se pudo enviar la sugerencia al servidor.');
    } finally {
      setIsSending(false);
    }
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
            className="w-full p-2 rounded bg-slate-900 border border-slate-600 text-white focus:border-yellow-500"
            placeholder="Ej: 86"
          />
        </div>

        <div>
          <label className="block text-slate-300 text-sm mb-1">Jugadores requeridos</label>
          <input 
            type="text" 
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
            className="w-full p-2 rounded bg-slate-900 border border-slate-600 text-white focus:border-yellow-500"
            placeholder="Ej: 2x87, 9x85"
          />
        </div>

        {error && <p className="text-red-400 text-sm bg-red-400/10 p-2 rounded">{error}</p>}
        {success && <p className="text-green-400 text-sm bg-green-400/10 p-2 rounded">¡Enviada con éxito!</p>}

        <button 
          type="submit" 
          disabled={isSending}
          className="mt-2 bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400 disabled:opacity-50"
        >
          {isSending ? 'Enviando...' : 'Enviar Sugerencia'}
        </button>
      </form>
    </div>
  );
};