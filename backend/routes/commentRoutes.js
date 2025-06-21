const express = require('express')
const prisma = require('../utils/prisma_client.js')

const router = express.Router();

router.get('/:boardId/cards/:cardId/comments', async (req, res) => {
    const cardId = parseInt(req.params.cardId);
    try {
        const comments = await prisma.comment.findMany({
            where: {
                cardId
            }
        });
        res.json(comments);
    } catch (err) {
        console.error('Error fetching comments: ', err);
    }
})

router.post('/:boardId/cards/:cardId/comments', async (req, res) => {
    const id = parseInt(req.params.cardId);
    const { text, author } = req.body;

    try {
        const newComment = await prisma.comment.create({
            data: {
                cardId: id,
                text,
                author
            }
        });

        res.status(201).json(newComment);
    } catch (err) {
        console.error('Error creating card:', err);
    }
})

module.exports = router