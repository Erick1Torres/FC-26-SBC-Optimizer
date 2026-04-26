import React, { createContext, useState, type ReactNode } from 'react';

//defino que forma tengo quiero el context
interface SBCContextType {
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
}

//creo en context en si
export const SBCContext = createContext<SBCContextType | undefined>(undefined);

//creo el Provider (el componente que envolvera la app para compartir el estado)
export const SBCProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Aqui voy a usar useState para guardar la media seleccionada
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  return (
    <SBCContext.Provider value={{ selectedRating, setSelectedRating }}>
      {children}
    </SBCContext.Provider>
  );
};