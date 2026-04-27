import React, { useEffect, useState } from 'react';
import { RatingButton } from '../components/RatingButton';
import { RecipeCard } from '../components/RecipeCard';
import { SuggestForm } from '../components/suggestForm';
import { useSBC } from '../hooks/useSBC';
import { fetchSuggestions } from '../api/cliente';

export const Home: React.FC = () => {
  const { selectedRating, setSelectedRating, data, isLoading, error, totalCardsNeeded } = useSBC();
  const [suggestionsList, setSuggestionsList] = useState<any[]>([]);
  
  // Función para cargar las sugerencias desde la API
  const loadSuggestions = async () => {
    try {
      const result = await fetchSuggestions();
      setSuggestionsList(result);
    } catch (err) {
      console.error("No se pudieron cargar sugerencias");
    }
  };

  // Cargamos al entrar a la página
  useEffect(() => {
    loadSuggestions();
  }, []);

  const availableRatings = [90, 89, 88, 87, 86, 85];

  return (
    <div className="flex flex-col items-center p-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-black text-yellow-500 italic mb-2 uppercase tracking-wider text-center">
        FC 26 SBC Solver
      </h1>
      
      {/* SECCIÓN DEL SOLVER (Igual que antes) */}
      <div className="grid grid-cols-3 gap-4 mb-10 w-full max-w-md">
        {availableRatings.map(rating => (
          <RatingButton 
            key={rating}
            rating={rating}
            isSelected={selectedRating === rating}
            onClick={setSelectedRating}
          />
        ))}
      </div>

      <div className="w-full mb-12">
        {isLoading && <p className="text-yellow-500 text-center animate-pulse">Consultando...</p>}
        {error && !isLoading && <p className="text-red-500 text-center p-4 border border-red-500 rounded">{error}</p>}

        {!isLoading && data && !error && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Soluciones para media {data.target}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {data.options.map((option, index) => <RecipeCard key={index} option={option} />)}
            </div>
          </div>
        )}
      </div>

      {/* SECCIÓN DE SUGERENCIAS */}
      <div className="w-full border-t border-slate-700 pt-8 flex flex-col items-center gap-8">
        <SuggestForm onSuccess={loadSuggestions} />

        <div className="w-full max-w-md">
          <h4 className="text-white font-bold mb-4 border-b border-slate-700 pb-2">Sugerencias Recientes</h4>
          <div className="flex flex-col gap-3">
            {suggestionsList.length === 0 && <p className="text-slate-500 text-sm">No hay sugerencias aún.</p>}
            {suggestionsList.slice().reverse().map((s) => (
              <div key={s.id} className="bg-slate-900/50 p-3 rounded border border-slate-800">
                <p className="text-yellow-500 font-bold text-xs uppercase">SBC Media {s.target}</p>
                <p className="text-slate-300 text-sm">{s.players}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};