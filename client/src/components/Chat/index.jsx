import React, { useEffect, useState } from 'react';
import ChatForm from '../ChatForm';
import { addSubscriber, socket } from '../../api/ws'
import MessageList from '../MessageList';
import constants from '../../constants';

function Chat() {
  const [message, setMessage] = useState([])
  
  useEffect(()=>{
    addSubscriber(constants.wsEventTypes.NEW_MESSAGE,(msg) => {
      setMessage(prev => [...prev, msg])
    })
  }, [])
  
  const handleSubmit = (values, formikBag) => {
    socket.emit(constants.wsEventTypes.SEND_MESSAGE, values)
  };

  console.log(message);

  return (
    <div>
      <ChatForm onSubmit={handleSubmit}/>
      <MessageList list={message} />
    </div>
  )
}

export default Chat