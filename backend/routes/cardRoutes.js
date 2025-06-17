import express from 'express';
import cors from 'cors';
import prisma from '../utils/prisma_client.js';

const router = express.Router();
router.use(cors());
router.use(express.json())

router.get('/', async (req, res) => {
    try {
        const cards = await prisma.card.findMany();
        res.json(cards);
    } catch (err) {
        console.error('Error fetching boards:', err);
    }
})

router.post('/', async (req, res) => {
    const {boardId, title, description, owner, GIF_search, GIF_URL} = req.body;
    try {
        const newCard = await prisma.card.create({
            data: {
                boardId,
                title,
                description,
                owner,
                GIF_search,
                GIF_URL
            }
        });
        res.status(201).json(newCard);
    } catch (err) {
        console.error('Error fetching cardss:', err);
    }
})

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const deleteCard = await prisma.card.delete({
            where: { id }
        });

        res.status(204).send()
    } catch (err) {
        console.error('Error fetching boards:', err);
    }
})

export default router;