import cors from 'cors'
import express from 'express'
import prisma from '../utils/prisma_client.js'

const router = express.Router();
router.use(cors())
router.use(express.json())

router.get('/', async (req, res) => {
    const { searchTerm } = req.query
    try {
        if (searchTerm) {
            const boards = await prisma.board.findMany({
                where: {
                    title: {
                        contains: searchTerm,
                    },
                }
            });
            res.json(boards);
        } else {
            console.log("here");
            const boards = await prisma.board.findMany();
            res.json(boards);
        }
    } catch (err) {
        console.error('Error fetching boards:', err);
    }
})

router.post('/', async (req, res) => {
    const { category, author } = req.body;
    try {
        const newBoard = await prisma.board.create({
            data: { category, author }
        });
        res.status(201).json(newBoard);
    } catch (err) {
        console.error('Error fetching boards:', err);
    }
})

router.delete('/:id', async (req, res) => {
    const id  = parseInt(req.params.id)
    try {
        const deleteBoard = await prisma.board.delete({
            where: { id }
        });

        res.status(204).send()
    } catch (err) {
        console.error('Error fetching boards:', err);
    }
})

router.put

export default router