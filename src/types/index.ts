//Esto define que tiene una de las 3 opciones (Opción 1, 2, 3)
export interface SBCOption {
  label: string; // Nombre de la opción
  players: { 
    rating: number; // Media del jugador (ej: 87)
    count: number;  // Cuántos de esa media (ej: 2)
  }[];
}

//Esto define la receta completa para una media (ej: SBC de 85)
export interface SBCRecipe {
  target: number; // La media que pide el SBC
  options: SBCOption[]; // El grupo de las 3 opciones
}