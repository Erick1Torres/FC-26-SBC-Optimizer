// Define esto arriba de todo para que todas las funciones puedan usarlo
const API_URL = '/api/v1'; 

export const fetchRecipes = async (target: number) => {
  try {
    const response = await fetch(`${API_URL}/recipes/${target}`);
    
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

// --- NUEVAS FUNCIONES PARA LAS SUGERENCIAS ---

// Función para traer todas las sugerencias
export const fetchSuggestions = async () => {
  const response = await fetch(`${API_URL}/suggestions`);
  if (!response.ok) throw new Error('Error al cargar sugerencias');
  return await response.json();
};

// Función para enviar una nueva sugerencia
export const postSuggestion = async (target: number, players: string) => {
  const response = await fetch(`${API_URL}/suggestions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ target, players })
  });
  return await response.json();
};