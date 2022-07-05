const { Router } = require('express');
const { getMsgList, getMsgById, createMsg, updateMsg, deleteMsg } = require('../controllers/message.contr');

// /api/msgs
const msgRouter = Router();

msgRouter.get('/', getMsgList);

// by id
msgRouter.get('/:id', getMsgById);

// create
msgRouter.post('/', createMsg);

// update
msgRouter.patch('/:id', updateMsg);

// delete
msgRouter.delete('/:id', deleteMsg);


module.exports = msgRouter;