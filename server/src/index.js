// server/src/index.js
const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/index'); 
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/v1/recipes', recipeRoutes);

// Esto es para que funcione en tu ordenador (Local)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}

// ESTO ES LO MÁS IMPORTANTE PARA VERCEL:
// Exportamos la app para que Vercel la pueda convertir en una Serverless Function
module.exports = app;