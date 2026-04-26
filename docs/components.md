# Documentación de Componentes

## 1. RatingButton (`src/components/RatingButton.tsx`)
- **Descripción:** Botón reutilizable para seleccionar la media del SBC.
- **Props:** - `rating (number)`: El valor numérico de la media (ej. 85).
  - `isSelected (boolean)`: Aplica estilos Tailwind dorados si está seleccionado.
  - `onClick (function)`: Evento que devuelve la media clickeada.

---

## 2. RecipeCard (`src/components/RecipeCard.tsx`)
- **Descripción:** Tarjeta que renderiza una de las soluciones posibles para un SBC. 

- **Props:**
  - `option (SBCOption)`: Objeto tipado con TypeScript que contiene el nombre de la opción y el array de jugadores necesarios.

- **Composición:** Utiliza renderizado de listas con `.map()` para iterar sobre los jugadores.