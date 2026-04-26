const express = require('express');
const cors = require('cors');
const app = express();

// IMPORTANTE: Asegúrate de que los nombres de archivos coincidan exactos (mayúsculas/minúsculas)
const recipeRoutes = require('./routes/recipeRoutes');

app.use(cors());
app.use(express.json());

// Ruta de salud para probar si el servidor responde algo
app.get('/api/v1/health', (req, res) => {
  res.json({ status: "ok", message: "Servidor encendido" });
});

app.use('/api/v1/recipes', recipeRoutes);

// Solo para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => console.log("Servidor en puerto 3000"));
}

module.exports = app;