const { Router } = require('express');
const { getUserList, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.contr');
const { createUserMiddleWare, updateUserMiddleWare, paramsUserMiddleWare } = require('../middlewares/user.mw');

// /api/users
const userRouter = Router();

userRouter.get('/', getUserList);

// by id
userRouter.get('/:id', paramsUserMiddleWare, getUserById);

// create
userRouter.post('/', createUser);

// update
userRouter.patch('/:id', paramsUserMiddleWare, updateUserMiddleWare, updateUser);

// delete
userRouter.delete('/:id', paramsUserMiddleWare, deleteUser);


module.exports = userRouter;