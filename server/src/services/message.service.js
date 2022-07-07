const createHttpError = require('http-errors');
const { User, Msg } = require("../db/");

class MsgService {
  createMsg = async (data) => {
    const author = await User.findById(data.author_id).exec();

    if (!author) {
      throw new Error("404 Author not found");
    }

    const interlocutor = await User.findById(data.to_user_id).exec();
    if (!interlocutor) {
      throw new Error("404 Interlocutor not found");
    }

    const result = await Msg.create(data);

    const msg = { ...result.toObject(), author };

    return msg;
  };

  getMsgList = async () => {
    const foundMsgs = await Msg.find();

    if(foundMsgs.length === 0){
      throw createHttpError(404, 'Msgs not found')
    }
      
    return foundMsgs;
  };

  getMsgById = async (msgId) => {  
    const msg = await Msg.findOne({_id: msgId});
  
    if(!msg){
      throw createHttpError(404, 'Msg not found')
    }
  
    return msg;
  };

  updateMsgById = async (id, data) => {
    const newMsg = await Msg.findOneAndUpdate(
      {_id: id},
      {$set: {...data}
      },
      {   
        returnDocument: "after"
      }
    );

    return newMsg.value;
  };

  deleteMsgById = async (id) => {
    const deletedMsg = await Msg.findOneAndDelete({ _id: id});
    
    if(deletedMsg.value === null){
      throw createHttpError(404, 'Msg not found')
    }

    return deletedMsg.value;
  };
}

module.exports = new MsgService();