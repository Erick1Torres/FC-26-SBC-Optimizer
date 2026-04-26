import { useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { SBCContext } from '../context/SBCContext';
import { fetchRecipeFromApi } from '../api/cliente';
import type { SBCRecipe } from '../types';

export const useSBC = () => {
  const context = useContext(SBCContext);
  if (!context) throw new Error("useSBC debe usarse dentro de SBCProvider");
  const { selectedRating, setSelectedRating } = context;

  // Los 3 estados de red que pide la Fase 12
  const [data, setData] = useState<SBCRecipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipe = useCallback(async (rating: number) => {
    setIsLoading(true);
    setError(null); // Limpiamos errores previos
    
    try {
      // Pedimos los datos al servidor REAL
      const result = await fetchRecipeFromApi(rating);
      setData(result);
    } catch (err) {
      setError("No se encontraron recetas para esta media. ¿El servidor está encendido?");
      setData(null);
    } finally {
      setIsLoading(false); // Apagamos el estado de carga
    }
  }, []);

  useEffect(() => {
    if (selectedRating !== null) {
      fetchRecipe(selectedRating);
    }
  }, [selectedRating, fetchRecipe]);

  const totalCardsNeeded = useMemo(() => {
    if (!data || data.options.length === 0) return 0;
    return data.options[0].players.reduce((sum, player) => sum + player.count, 0);
  }, [data]);

  return { selectedRating, setSelectedRating, data, isLoading, error, totalCardsNeeded };
};