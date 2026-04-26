const express = require('express');
const cors = require('cors');
const app = express();

// IMPORTANTE: Asegúrate de que los archivos se llamen exactamente así
const recipeRoutes = require('./routes/recipeRoutes');

app.use(cors());
app.use(express.json());

// Ruta para comprobar que la API responde (puedes probarla en el navegador)
app.get('/api/v1/health', (req, res) => {
  res.json({ status: "ok", message: "Servidor conectado correctamente" });
});

// Tus rutas de recetas
app.use('/api/v1/recipes', recipeRoutes);

// Esto es vital: Vercel no usa app.listen, pero tu PC sí.
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor local en puerto ${PORT}`));
}

// ESTA LÍNEA ES LA QUE HACE QUE VERCEL FUNCIONE
module.exports = app;