const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba directa
app.get('/api/v1/recipes/:target', (req, res) => {
  res.json({ 
    message: "Conexión establecida con la API", 
    target: req.params.target,
    status: "success" 
  });
});

module.exports = app;