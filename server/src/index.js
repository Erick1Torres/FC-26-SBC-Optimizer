// server/src/index.cjs (Cámbiale la extensión a .cjs)
const express = require('express');
const cors = require('cors');
const app = express();

// Usamos rutas relativas sólidas
const recipeRoutes = require('./routes/recipeRoutes');

app.use(cors());
app.use(express.json());

// Esta ruta ayuda a verificar si la API responde antes de ir a las recetas
app.get('/api/v1/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/v1/recipes', recipeRoutes);

if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => console.log(`Servidor en puerto 3000`));
}

module.exports = app;