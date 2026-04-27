const express = require('express');
const router = express.Router();

// Simulamos una base de datos en memoria
let suggestions = [
  { id: 1, text: "¡Me encanta el solver!", date: new Date() }
];

// GET: Para obtener todas las sugerencias
router.get('/', (req, res) => {
  res.json(suggestions);
});

// POST: Para recibir una nueva sugerencia
router.post('/', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "El texto es obligatorio" });

  const newSuggestion = {
    id: suggestions.length + 1,
    text,
    date: new Date()
  };

  suggestions.push(newSuggestion);
  res.status(201).json(newSuggestion);
});

module.exports = router;