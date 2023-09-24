const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async(req, res, next) => {
    try {
        const allFighters = await prisma.fighter.findMany();
        res.send(allFighters);
    } catch(err) {
        next(err);
    }
})

router.get('/user/:id', async(req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where:{
                id: Number(req.params.id)
            },
            include: {
                fighters: true
            }
        });
        res.send(user);
    } catch(err) {
        next(err);
    }
})

router.get('/:id', async(req, res, next) => {
    try {
        const fighter = await prisma.fighter.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.send(fighter);
    } catch(err) {
        next(err);
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const userFighter = await prisma.fighter.delete({
            wnere: {
                id: Number(req.params.id)
            }
        });
        res.send(userFighter);
    } catch(err) {
        next(err);
    }
})

router.put('/:id', async(req, res, next) => {
    try {
        const updatedFighter = await prisma.fighter.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        res.send(updatedFighter);
    } catch(err) {
        next(err);
    }
})

router.post('/', async(req, res, next) => {
    try {
        const createdFighter = await prisma.fighter.create({
            where: {
                userId: Number(req.user.id)
            },
            data: req.body
        });
        res.send(createdFighter)
    } catch(err) {
        next(err);
    }
})

module.exports = router;