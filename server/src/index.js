const express = require('express');
const cors = require('cors');
const app = express();

const recipeRoutes = require('./routes/recipeRoutes');

app.use(cors());
app.use(express.json());

// --- NUEVA SECCIÓN DE SUGERENCIAS ---
let suggestions = [
  { id: 1, target: 88, players: "3x89, 8x87", date: new Date() }
];

app.get('/api/v1/suggestions', (req, res) => {
  res.json(suggestions);
});

app.post('/api/v1/suggestions', (req, res) => {
  const { target, players } = req.body;
  const newSugg = { 
    id: suggestions.length + 1, 
    target, 
    players, 
    date: new Date() 
  };
  suggestions.push(newSugg);
  res.status(201).json(newSugg);
});
// -------------------------------------

app.get('/api/v1/health', (req, res) => {
  res.json({ status: "ok", message: "Servidor conectado correctamente" });
});

app.use('/api/v1/recipes', recipeRoutes);

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor local en puerto ${PORT}`));
}

module.exports = app;