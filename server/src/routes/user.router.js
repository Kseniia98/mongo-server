const { Router } = require('express');
const { getUserList, getUserById, updateUser, deleteUser } = require('../controllers/user.contr');
const { checkTokenMw } = require('../middlewares/token.mw');
const { updateUserMiddleWare } = require('../middlewares/user.mw');

// /api/users
const userRouter = Router();

userRouter.get('/', getUserList);

// by id
userRouter.get('/:id', getUserById);

// update
userRouter.patch('/:id', checkTokenMw, updateUserMiddleWare, updateUser);

// delete
userRouter.delete('/:id', deleteUser);


module.exports = userRouter;