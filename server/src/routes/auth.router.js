const { Router } = require('express');
const { registerUser, loginUser } = require('../controllers/auth.contr');
const { createUserMiddleWare } = require('../middlewares/user.mw');

// /api/auth
const authRouter = Router();

authRouter.post('/register', createUserMiddleWare, registerUser);

authRouter.post('/login', loginUser);


module.exports = authRouter;