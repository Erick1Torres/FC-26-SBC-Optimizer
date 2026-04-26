# Rutas y Navegación - Fase 9

Se ha configurado la navegación de la aplicación (SPA) utilizando `react-router-dom`.

## Estructura de Rutas
- `/` -> Renderiza el componente `<Home />`. Es la página principal donde está la calculadora de SBC.
- `*` -> Renderiza el componente `<NotFound />`. Es una ruta "catch-all" que atrapa cualquier URL que no exista y muestra una página 404 personalizada con un botón para volver al inicio.

## Integración
El `BrowserRouter` se ha colocado en el archivo raíz (`App.tsx`), envolviendo las rutas. A su vez, todo el sistema de enrutamiento está envuelto por el `SBCProvider` (Context API) para que cualquier página futura pueda acceder al estado global si lo necesita.