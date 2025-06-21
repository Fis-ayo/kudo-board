const  express = require( 'express')
const  prisma = require( '../utils/prisma_client.js')

const router = express.Router();

router.get('/:boardId/cards', async (req, res) => {
    const boardId = parseInt(req.params.boardId);
    try {
        const cards = await prisma.card.findMany({
            where: {
                boardId
            }
        });
        res.json(cards);
    } catch (err) {
        console.error('Error fetching cards:', err);
    }
})

router.get('/:boardId/cards/:cardId', async (req, res) => {
    const { boardId, cardId } = req.params;
    try {
        const card = await prisma.card.findMany({
            where: {
                boardId: parseInt(boardId),
                id: parseInt(cardId)
            }
        });
        res.json(card);
    } catch (err) {
        console.error('Error fetching card:', err);
    }
})

router.put('/:boardId/cards/:cardId/pinned', async (req, res) => {
    const id = parseInt(req.params.cardId);
    try {
        const cardExists = await prisma.card.findUnique({
            where: { id }
        });
        if (!cardExists) {
            return res.status(404).json({ error: 'Card not found' });
        }
        const updated = await prisma.card.update({
            where: { id },
            data: { pinned: !cardExists.pinned }
        });
        res.json(updated);
    } catch (err) {
        console.error('Error getting pinned card', err);
    }
})

router.post('/:boardId/cards', async (req, res) => {
    const id = parseInt(req.params.boardId);
    const { title, description, owner, GIF_URL } = req.body;

    try {
        const newCard = await prisma.card.create({
            data: {
                boardId: id,
                title,
                description,
                owner,
                GIF_URL
            }
        });

        res.status(201).json(newCard);
    } catch (err) {
        console.error('Error creating card:', err);
    }
})

router.patch('/:boardId/cards/:cardId', async (req, res) => {
    const cardId = parseInt(req.params.cardId);
    try {
        await prisma.card.update({
            where: { id: cardId },
            data: {
                vote_count: { increment: 1 }
            }
        })
        res.status(204).send();
    } catch (err) {
        console.error('Error updating vote: ', err)
    }
})

router.delete('/:boardId/cards/:cardId', async (req, res) => {
    const cardId = parseInt(req.params.cardId);
    try {
        await prisma.card.delete({
            where: {
                id: cardId
            }
        });
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting boards:', err);
    }
})

module.exports = router