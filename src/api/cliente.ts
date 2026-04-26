import type { SBCRecipe } from '../types';

// Función tipada que hace la petición al servidor (Node.js)
export const fetchRecipeFromApi = async (target: number): Promise<SBCRecipe> => {
  const response = await fetch(`http://localhost:3000/api/v1/recipes/${target}`);
  
  // Si el servidor responde con error (ej. 404 porque no existe la media)
  if (!response.ok) {
    throw new Error('No se encontraron datos para esta media');
  }
  
  // Convertimos la respuesta a JSON y la devolvemos
  const data = await response.json();
  return data;
};