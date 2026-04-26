const express = require('express');
const cors = require('cors');
const path = require('path'); // Añade esto
const app = express();

// IMPORTANTE: Usamos path.resolve para que Node sepa exactamente dónde está el archivo
const recipeRoutes = require(path.resolve(__dirname, 'routes/recipeRoutes'));

app.use(cors());
app.use(express.json());

app.use('/api/v1/recipes', recipeRoutes);

if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => console.log(`Servidor local en puerto 3000`));
}

module.exports = app;