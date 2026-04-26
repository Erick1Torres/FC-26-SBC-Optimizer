// src/api/cliente.ts

// Añadimos el slash inicial para asegurar que busque desde la raíz del dominio
const API_URL = '/api/v1'; 

export const fetchRecipes = async (target: number) => {
  try {
    // Forzamos la ruta completa
    const response = await fetch(`${API_URL}/recipes/${target}`);
    
    // Si Vercel te devuelve un HTML (la propia web) en vez de un JSON, 
    // es que la ruta está mal redireccionada.
    const contentType = response.headers.get("content-type");
    if (!response.ok || !contentType || !contentType.includes("application/json")) {
       throw new Error('El servidor no respondió con datos válidos');
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la petición:", error);
    throw error;
  }
};