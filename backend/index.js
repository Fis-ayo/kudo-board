import express from 'express';
import boardRoutes from './routes/boardRoutes.js';
import cardRoutes from './routes/cardRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api/boards', boardRoutes);
boardRoutes.use('/', cardRoutes);

app.listen(PORT, () => {
    console.log(`🚀Server is connected to http://localhost:${PORT}`)
})