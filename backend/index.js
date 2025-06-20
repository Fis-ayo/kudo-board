import express from 'express';
import boardRoutes from './routes/boardRoutes.js';
import cardRoutes from './routes/cardRoutes.js';
import commentRoutes from './routes/commentRoutes.js'

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Origin", "https://kudoboardservice.onrender.com");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})
    app.use('/api/boards', boardRoutes);
    boardRoutes.use('/', cardRoutes);
    cardRoutes.use('/', commentRoutes);

    app.listen(PORT, () => {
        console.log(`🚀Server is connected to http://localhost:${PORT}`)
    })