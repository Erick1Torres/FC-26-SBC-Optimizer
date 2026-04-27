import React, { useEffect, useState } from 'react';
import { RatingButton } from '../components/RatingButton';
import { RecipeCard } from '../components/RecipeCard';
import { SuggestForm } from '../components/suggestForm';
import { useSBC } from '../hooks/useSBC';
import { fetchSuggestions } from '../api/cliente';

export const Home: React.FC = () => {
  // 1. Extraemos los datos del hook (sin totalCardsNeeded para evitar el error de Vercel)
  const { selectedRating, setSelectedRating, data, isLoading, error } = useSBC();
  
  // 2. Estado para la lista de sugerencias que vienen del servidor
  const [suggestionsList, setSuggestionsList] = useState<any[]>([]);
  
  // 3. Función para cargar las sugerencias desde la API
  const loadSuggestions = async () => {
    try {
      const result = await fetchSuggestions();
      setSuggestionsList(result);
    } catch (err) {
      console.error("No se pudieron cargar sugerencias");
    }
  };

  // 4. Cargar las sugerencias al abrir la página por primera vez
  useEffect(() => {
    loadSuggestions();
  }, []);

  const availableRatings = [90, 89, 88, 87, 86, 85];

  return (
    <div className="flex flex-col items-center p-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-black text-yellow-500 italic mb-2 uppercase tracking-wider text-center">
        FC 26 SBC Solver
      </h1>
      <p className="text-slate-400 mb-8 text-center">Selecciona la media objetivo de tu SBC</p>

      {/* Cuadrícula de botones de medias */}
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

      {/* ZONA DE RESULTADOS DEL SOLVER */}
      <div className="w-full mb-12">
        {isLoading && (
          <p className="text-yellow-500 text-center text-xl animate-pulse">Consultando al servidor...</p>
        )}

        {error && !isLoading && (
          <p className="text-red-500 text-center text-xl p-4 bg-red-900/20 rounded-lg border border-red-500">
            {error}
          </p>
        )}

        {!isLoading && data && !error && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Soluciones para media {data.target}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {data.options.map((option, index) => (
                <RecipeCard key={index} option={option} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SECCIÓN DE SUGERENCIAS Y FORMULARIO */}
      <div className="w-full border-t border-slate-700 pt-8 flex flex-col items-center gap-12">
        
        {/* Pasamos loadSuggestions al formulario para que refresque la lista al enviar */}
        <SuggestForm onSuccess={loadSuggestions} />

        <div className="w-full max-w-md mb-10">
          <h4 className="text-white font-bold mb-4 border-b border-slate-700 pb-2 flex justify-between items-center">
            Sugerencias de la comunidad
            <span className="text-xs text-slate-500 font-normal">Recientes</span>
          </h4>
          
          <div className="flex flex-col gap-3">
            {suggestionsList.length === 0 && (
              <p className="text-slate-500 text-sm text-center">No hay sugerencias aún. ¡Sé el primero!</p>
            )}
            
            {/* Mostramos las sugerencias (las más nuevas primero) */}
            {suggestionsList.slice().reverse().map((s) => (
              <div key={s.id} className="bg-slate-900/50 p-3 rounded-lg border border-slate-800 animate-fade-in">
                <div className="flex justify-between items-center mb-1">
                   <p className="text-yellow-500 font-bold text-xs uppercase">SBC Media {s.target}</p>
                   <span className="text-[10px] text-slate-600">ID #{s.id}</span>
                </div>
                <p className="text-slate-300 text-sm italic">"{s.players}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};