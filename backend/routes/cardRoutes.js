import express from 'express';
import cors from 'cors';
import prisma from '../utils/prisma_client.js';

const router = express.Router();
router.use(cors());
router.use(express.json())

router.get('/:boardId/cards', async (req, res) => {
    const boardId = parseInt(req.params.boardId);
    try {
        const cards = await prisma.card.findMany({
            where:{
                boardId
            }
        });
        res.json(cards);
    } catch (err) {
        console.error('Error fetching cards:', err);
    }
})

router.get('/:boardId/cards/:cardId', async (req, res) => {
    const {boardId, cardId} = req.params
    try {
        const card = await prisma.card.findMany({
            where:{
                boardId,
                id: cardId
            }
        });
        res.json(card);
    } catch (err) {
        console.error('Error fetching card:', err);
    }
})

router.post('/:boardId/cards', async (req, res) => {
    const {boardId} = req.params
    const {title, description, owner} = req.body;

    try {
        const newCard = await prisma.card.create({
            data: {
                boardId,
                title,
                description,
                owner
            }
        });

        res.status(201).json(newCard);
    } catch (err) {
        console.error('Error creating card:', err);
    }
})

router.delete('/:boardId/cards/:id', async (req, res) => {
    const {cardId} = req.params
    try {
        const deleteCard = await prisma.card.delete({
            where:{
                id: cardId
            }
        });

        res.status(204).send()
    } catch (err) {
        console.error('Error deleting boards:', err);
    }
})

export default router;