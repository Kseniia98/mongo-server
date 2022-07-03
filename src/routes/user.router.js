const { Router } = require('express');
const { getList, getById, createUser, updateUser, deleteUser } = require('../controllers/user.contr');
const { createUserMiddleWare, updateUserMiddleWare, paramsUserMiddleWare } = require('../middlewares/user.mw');

// /api/users
const userRouter = Router();

userRouter.get('/', getList);

// by id
userRouter.get('/:id', paramsUserMiddleWare, getById);

// create
userRouter.post('/', createUserMiddleWare, createUser);

// update
userRouter.patch('/:id', paramsUserMiddleWare, updateUserMiddleWare, updateUser);

// delete
userRouter.delete('/:id', paramsUserMiddleWare, deleteUser);


module.exports = userRouter;