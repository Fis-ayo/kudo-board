const express = require( 'express')
const prisma = require( '../utils/prisma_client.js')
const router = express.Router();

router.get('/', async (req, res) => {
    const { searchTerm } = req.query
    try {
        const filters = searchTerm ? 
        {where: {title:{contains: searchTerm}}} : {}

        const boards = await prisma.board.findMany(filters)
        res.json(boards);
    } catch (err) {
        console.error('Error fetching boards:', err);
    }
})

router.get('/:id', async (req, res) => {
    const id  = parseInt(req.params.id)
    try {
        const board = await prisma.board.findUnique({
            where: {
                id
            }
        })
        res.json(board);
    } catch (err) {
        console.error('Error fetching board:', err);
    }
})

router.post('/', async (req, res) => {
    const { title, category, author } = req.body;
    try {
        const newBoard = await prisma.board.create({
            data: { title, category, author }
        });
        res.status(201).json(newBoard);
    } catch (err) {
        console.error('Error creating board:', err);
    }
})

router.delete('/:id', async (req, res) => {
    const id  = parseInt(req.params.id)
    try {
        await prisma.board.delete({
            where: { id }
        });

        res.status(204).send()
    } catch (err) {
        console.error('Error deleting board:', err);
    }
})


module.exports = router
