import express from 'express';
import todosRouter from '../api/todos'
import usersRouter from '../api/users'
import authRouter from '../api/auth'
import checkoutRouter from '../api/checkout'
import contactRouter from '../api/contact'

const router = express.Router();

router.use('/todos', todosRouter);
router.use('/users' , usersRouter);
router.use('/auth' , authRouter);
router.use('/checkout', checkoutRouter);
router.use('/contact', contactRouter);

export default router;