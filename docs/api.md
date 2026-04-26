# Documentación de la API - Fase 11

El backend está construido con Node.js y Express, expuesto en el puerto 3000.

## Endpoints

### Obtener receta por media
- **URL:** `/api/v1/recipes/:target`
- **Método:** `GET`
- **Descripción:** Devuelve un objeto con las opciones de receta para la media solicitada.

**Ejemplo de Request:**
`GET http://localhost:3000/api/v1/recipes/85`

**Ejemplo de Response (200 OK):**
```json
{
  "target": 85,
  "options": [
    {
      "label": "Opción 1: Equilibrada",
      "players": [
        { "rating": 86, "count": 2 },
        { "rating": 84, "count": 9 }
      ]
    }
  ]
}
```

## Ejemplo de Error (404 Not Found):

```json
{
  "message": "No hay recetas para la media 99"
}
```

-----

### ¿Cómo probamos que la API está viva?
1. En la terminal (dentro de la carpeta `server`), ejecuta: `node src/index.js`
2. Ve a tu navegador y abre esta pestaña: `http://localhost:3000/api/v1/recipes/85`
