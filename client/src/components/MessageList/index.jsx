import React from 'react'

function MessageList(props) {
  const messages = Array.isArray(props.list) ? props.list : [];

  return (
    <div>
      {messages.map(msg=>{
        return <li key={msg._id}>
          {msg.body}
        </li>
      })}
    </div>
  )
}

MessageList.defaultProps = {
  list: [],
}

export default MessageList;