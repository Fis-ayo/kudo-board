import express from 'express';
import boardRoutes from './routes/boardRoutes.js';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/board', boardRoutes);

app.listen(PORT, () => {
    console.log(`🚀Server is connected to http://localhost:${PORT}`)
})