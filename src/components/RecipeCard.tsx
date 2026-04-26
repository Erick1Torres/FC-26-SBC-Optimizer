import React from 'react';
import type { SBCOption } from '../types';

interface RecipeCardProps {
  option: SBCOption;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ option }) => {
  return (
    <div className="bg-slate-800 p-5 rounded-xl border border-yellow-500/30">
      <h3 className="text-lg font-bold text-yellow-500 mb-3">{option.label}</h3>
      <div className="space-y-2">
        {option.players.map((player, index) => (
          <div key={index} className="flex justify-between bg-slate-700 p-2 rounded">
            <span className="text-slate-200">Jugador Media {player.rating}</span>
            <span className="font-mono text-yellow-400 font-bold">x{player.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};