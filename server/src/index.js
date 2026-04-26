const express = require('express');
const cors = require('cors');
const path = require('path'); // Añadimos esto para ayudar a Vercel

// Usamos rutas absolutas para que Vercel no se pierda
const { PORT } = require('./config/index'); 
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba para saber si la API está viva
app.get('/api/health', (req, res) => res.send('API funcionando'));

app.use('/api/v1/recipes', recipeRoutes);

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`🚀 Local: http://localhost:${PORT}`));
}

module.exports = app;