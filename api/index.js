// /api/index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Ahora subimos un nivel para entrar en la carpeta 'server'
const { PORT } = require('../server/src/config/index'); 
const recipeRoutes = require('../server/src/routes/recipeRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/v1/recipes', recipeRoutes);

module.exports = app;