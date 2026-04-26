# Context API y Estado Global - Fase 8

## Contexto Creado: `SBCContext`
Se ha implementado un contexto global para gestionar la valoración objetivo (`selectedRating`) elegida por el usuario.

----

## ¿En qué casos es útil usar Context API? (Justificación)
En este proyecto, la media seleccionada es un estado compartido que necesitan distintos componentes:

1. Los botones (`RatingButton`) necesitan saber si coinciden con la media seleccionada para aplicar los estilos de componente "activo".
2. La vista de resultados necesita saber qué media buscar para renderizar las `<RecipeCard />`.

Si no usáramos Context API, tendríamos que usar "prop-drilling", es decir, pasar la variable y la función `setSelectedRating` manualmente por cada nivel del árbol de componentes, lo cual hace el código más sucio y difícil de mantener.

------

## Implementación
- Se ha usado `createContext` para definir la estructura.
- Se ha creado un `<SBCProvider>` que almacena el estado real usando `useState`.
- Este Provider envolverá la aplicación (o parte de ella) para hacer el estado accesible en cualquier hijo.