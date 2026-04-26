const API_URL = '/api/v1'; 

export const fetchRecipes = async (target: number) => {
  try {
    const response = await fetch(`${API_URL}/recipes/${target}`);
    
    if (!response.ok) {
      throw new Error('No se pudo obtener la información del servidor');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la petición:", error);
    throw error;
  }
};