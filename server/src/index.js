const express = require('express');
const cors = require('cors');
const app = express();

// Importaciones con rutas claras
const { PORT } = require('./config/index');
const recipeRoutes = require('./routes/recipeRoutes');

app.use(cors());
app.use(express.json());

// IMPORTANTE: Prefijo de la API
app.use('/api/v1/recipes', recipeRoutes);

// Solo encendemos el puerto si no estamos en producción (Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
}

module.exports = app;