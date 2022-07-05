import React from 'react';
import ChatForm from '../ChatForm';
// import MessageList from '../MessageList';

function Chat() {
  const handleSubmit = () => {

  };

  return (
    <div>
      {/* <MessageList list={[]} /> */}
      <ChatForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default Chat