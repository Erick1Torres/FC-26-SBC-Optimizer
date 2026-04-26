const express = require('express');
const cors = require('cors');
// Importante: chequea que estas rutas apunten a tus carpetas
const { PORT } = require('./config/index'); 
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Aquí conectamos las rutas que están en la carpeta routes
app.use('/api/v1/recipes', recipeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor Profesional corriendo en http://localhost:${PORT}`);
});