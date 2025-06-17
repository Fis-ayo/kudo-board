import express from 'express';
import boardRoutes from './routes/boardRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/boards', boardRoutes);

app.listen(PORT, () => {
    console.log(`🚀Server is connected to http://localhost:${PORT}`)
})