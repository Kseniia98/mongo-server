const { createMsg, updateMsgById, deleteMsgById, getMsgById, getMsgList } = require("../services/message.service");

class MsgController {

  createMsg = async (req, res, next) => {
    try {
      const data = req.body;
      const createdMsg = await createMsg(data)

      res.status(200).send({ data: createdMsg })
    } catch (error) {
      next(error)
    }
  };

  updateMsg = async (req, res, next) => {
    try {
      const data = req.body;
      const id = req.params.id;

      const updatedMsg = await updateMsgById(id, data);
      res.status(200).send({data: updatedMsg});
  } catch (error) {
    next(error)
  }
  };

  deleteMsg = async (req, res, next) => {
    try {
    const id = req.params.id;

    const deletedMsg = await deleteMsgById(id);
    res.status(200).send({data: deletedMsg});
  } catch (error) {
    next(error)
  }
  };

  getMsgById = async (req, res, next) => {
    try {
    const id = req.params.id;
  
    const foundMsg = await getMsgById(id)

    res.status(200).send({ data: foundMsg });
  } catch (error) {
    next(error)
  }
  };

  getMsgList = async (req, res, next) => {
    try {  
    const msgList = await getMsgList();
  
    res.status(200).send({ data: msgList });
  } catch (error) {
    next(error)
  }
  };
}

module.exports = new MsgController();