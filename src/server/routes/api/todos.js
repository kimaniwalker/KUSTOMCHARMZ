import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport'
import db from '../../db'
import { tokenCheck } from '../../middleware/auth.mw';

const router = express.Router();

router.get('/', /* passport.authenticate('jwt') */ tokenCheck,  async (req, res) => {
    /* const bearerToken = req.headers.authorization;

    if (bearerToken) {
        const token = bearerToken.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            res.json({user})
        });
    } else {
        res.sendStatus(401);
    } */

    res.json({message: req.user})

});

router.get('/:todoid', async (req, res) => {
    let todoid = req.params.todoid
    try {
        res.json({ msg: 'You write some good code brotha !!' + todoid });
    } catch (error) {
        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });
    }

});

router.put('/:todoid', async (req, res, next) => {
    let todoid = req.params.todoid
    let id = req.params.id
    try {
        res.json({ msg: 'You write some good code brotha !!' + todoid + id });
    } catch (error) {
        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });
    }

});

router.post('/', async (req, res, next) => {
    let newTodo = req.body;
    try {
        res.json({ msg: 'You write some good code brotha !!', ...newTodo });
    } catch (error) {
        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });
    }

});

router.delete('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        res.json({ msg: 'You write some good code brotha !!', id });
    } catch (error) {
        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });
    }

});



export default router;