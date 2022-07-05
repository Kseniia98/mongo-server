const createHttpError = require('http-errors');
const Msg = require('../db/models/message');

class MsgService {
  createMsg = async (data) => {
    const result = await Msg.create(data);
      
    return result.insertedId;
  };

  getMsgList = async () => {
    const foundMsgs = await Msg.find().toArray();

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