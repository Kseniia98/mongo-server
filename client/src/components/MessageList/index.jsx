import React from 'react'

function MessageList(props) {
  const messages = Array.isArray(props.list) ? props.list : [];

  return (
    <ul>
      {messages.map(msg => {
        return <li key={msg._id}>
          {msg.author.firstname} {msg.author.lastname}: {msg.body}
        </li>
      })}
    </ul>
  )
}

MessageList.defaultProps = {
  list: [],
}

export default MessageList;