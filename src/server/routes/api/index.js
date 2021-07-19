import express from 'express';
import todosRouter from '../api/todos'
import usersRouter from '../api/users'
import authRouter from '../api/auth'

const router = express.Router();

router.use('/todos', todosRouter);
router.use('/users' , usersRouter);
router.use('/auth' , authRouter);

export default router;