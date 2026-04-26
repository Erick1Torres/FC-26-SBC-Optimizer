const express = require('express');
const cors = require('cors');
const app = express();

// Asegúrate de que las rutas ahora apunten bien (un solo punto porque están al lado)
const recipeRoutes = require('./src/routes/recipeRoutes');

app.use(cors());
app.use(express.json());

// Esta ruta es para que TÚ compruebes si el server vive
app.get('/api/v1/test', (req, res) => res.json({ status: "vivo" }));

app.use('/api/v1/recipes', recipeRoutes);

module.exports = app;