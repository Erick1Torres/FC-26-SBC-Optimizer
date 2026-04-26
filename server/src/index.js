// server/src/index.js
import express from 'express';
import cors from 'cors';
import recipeRoutes from './routes/recipeRoutes.js'; // IMPORTANTE: añade el .js al final

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/recipes', recipeRoutes);

export default app; // En Vercel, el export default es mejor que el module.exports