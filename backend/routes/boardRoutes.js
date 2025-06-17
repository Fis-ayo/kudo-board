import express from 'express'
const router = express.Router();
import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();


router.get('/', async (req, res) => {
    try{
        const board = await prisma.board.findMany();
        res.json(board);
    } catch(err){
        res.status(500).json({error: 'Failed to fetch board'});
    }
})

router.post('/', async (req, res) => {
    const { category, author } = req.body;
    try {
    const newBoard = await prisma.board.create({
        data: { category, author}
    });
    res.status(201).json(newBoard);
    } catch(err){
        res.status(500).json({error: 'Failed to create board'});
    }
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params
    try{
    const deleteBoard = await prisma.board.delete({
        where: {id: parseInt(id)}
    })

    res.status(204).send()
    }catch(err){
        res.status(500).json({error: 'Failed to delete board'});
    }
})

export default router