# Arquitectura y Diseño - FC 26 SBC Solver

## 1. Estructura de Componentes
La aplicación se divide en componentes logicos y visuales:
- **Páginas:**
  - `Home`: Página principal que orquesta la vista.
  - `NotFound`: Página para el error 404 de rutas no encontradas.
- **Componentes Reutilizables:**
  - `RatingButton`: Botón para seleccionar la media objetivo.
  - `RecipeCard`: Tarjeta que muestra una opción de solución con sus jugadores requeridos.
  - `Layout` / `Header`: Envoltura visual de la app.

----

## 2. Gestión del Estado
- **Estado Global:** Se utilizará **Context API** (`SBCContext`) para almacenar globalmente la "media seleccionada" por el usuario, permitiendo que cualquier componente acceda a este dato sin prop-drilling.
- **Estado Local:** Se usará `useState` en componentes individuales para gestionar la carga (`loading`) y errores (`error`) al hacer peticiones a la API.

----

## 3. Diseño del Backend y API REST
El backend (Node.js + Express) servirá las recetas estructuradas.
- **Recurso principal:** `/api/v1/recipes`
- **Endpoints:**
  - `GET /api/v1/recipes` -> Devuelve todas las medias disponibles.
  - `GET /api/v1/recipes/:target` -> Devuelve las opciones de receta para una media específica (ej. 85).

**Contrato de Datos (Response para GET /api/v1/recipes/85):**
```json
{
  "target": 85,
  "options": [
    {
      "label": "Opción 1",
      "players": [
        { "rating": 86, "count": 2 },
        { "rating": 84, "count": 9 }
      ]
    }
  ]
}
```

-----

## 4. Persistencia de Datos
- **Servidor:** Almacenará la base de datos de recetas (funcionará como la "Única Fuente de Verdad").

- **Cliente:** Utilizará LocalStorage únicamente para guardar la última media que el usuario buscó (preferencia de usuario), pero los datos de las recetas siempre vendrán de la API.

-----

## 5. Diagrama de Flujo de Datos
El flujo de comunicación entre el usuario, el frontend y el backend es el siguiente:

[Usuario pulsa botón '85']
    [Frontend actualiza Context API con target=85]
        [Frontend hace petición HTTP: GET /api/v1/recipes/85]
            [Backend (Express) procesa, busca en su base de datos/mock y responde con JSON 200 OK]
                [Frontend recibe datos, actualiza estado local y renderiza ]

----