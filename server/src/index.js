const express = require('express');
const cors = require('cors');
const path = require('path'); // Importante para manejar rutas
const app = express();

// Importaciones con rutas relativas limpias
// Asegúrate de que los archivos existan en estas carpetas
const recipeRoutes = require('./routes/recipeRoutes');

app.use(cors());
app.use(express.json());

// Endpoint de prueba para verificar que el servidor vive
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Servidor funcionando' });
});

// Rutas de la API
app.use('/api/v1/recipes', recipeRoutes);

// Solo para local
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => console.log(`Servidor en puerto 3000`));
}

module.exports = app;