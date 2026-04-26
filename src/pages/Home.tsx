import React from 'react';
import { RatingButton } from '../components/RatingButton';
import { RecipeCard } from '../components/RecipeCard';
import { SuggestForm } from '../components/suggestForm';
import { useSBC } from '../hooks/useSBC';

export const Home: React.FC = () => {
  // Traemos todo lo del hook, incluyendo el estado de "error"
  const { selectedRating, setSelectedRating, data, isLoading, error, totalCardsNeeded } = useSBC();
  
  // Las medias de los botones
  const availableRatings = [90, 89, 88, 87, 86, 85];

  return (
    <div className="flex flex-col items-center p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-black text-yellow-500 italic mb-2 uppercase tracking-wider text-center">
        FC 26 SBC Solver
      </h1>
      <p className="text-slate-400 mb-8 text-center">Selecciona la media objetivo de tu SBC</p>

      {/* Cuadrícula de botones */}
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

      {/* ZONA DE RESULTADOS (Los 3 estados de red) */}
      <div className="w-full mb-12">
        
        {/* Estado 1: CARGANDO */}
        {isLoading && (
          <p className="text-yellow-500 text-center text-xl animate-pulse">Consultando al servidor...</p>
        )}

        {/* Estado 2: ERROR (Si la API falla) */}
        {error && !isLoading && (
          <p className="text-red-500 text-center text-xl p-4 bg-red-900/20 rounded-lg border border-red-500">
            {error}
          </p>
        )}

        {/* Estado 3: ÉXITO (Mostramos los datos) */}
        {!isLoading && data && !error && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Soluciones para media {data.target}
            </h2>
            <p className="text-sm text-slate-400 mb-6 text-center">
              Cartas necesarias para la Opción 1: {totalCardsNeeded} cartas.
            </p>
            
            {/* Iteramos sobre las opciones de la media seleccionada */}
            <div className="grid gap-6 md:grid-cols-3">
              {data.options.map((option, index) => (
                <RecipeCard key={index} option={option} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ZONA DEL FORMULARIO */}
      <div className="w-full border-t border-slate-700 pt-8 flex justify-center mt-auto">
        <SuggestForm />
      </div>

    </div>
  );
};