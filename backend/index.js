const express = require('express')
const boardRoutes = require('./routes/boardRoutes.js')
const cardRoutes = require('./routes/cardRoutes.js')
const commentRoutes = require('./routes/commentRoutes.js')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.use('/api/boards', boardRoutes);
boardRoutes.use('/', cardRoutes);
cardRoutes.use('/', commentRoutes);

app.listen(PORT, () => {
    console.log(`🚀Server is connected to http://localhost:${PORT}`)
})