import React from 'react';

interface RatingButtonProps {
  rating: number;
  isSelected: boolean;
  onClick: (rating: number) => void;
}

export const RatingButton: React.FC<RatingButtonProps> = ({ rating, isSelected, onClick }) => {
  return (
    <button
      onClick={() => onClick(rating)}
      className={`p-4 rounded-lg font-bold text-xl transition-all ${
        isSelected 
          ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/50 scale-105' 
          : 'bg-slate-800 text-white hover:bg-slate-700'
      }`}
    >
      Media {rating}
    </button>
  );
};