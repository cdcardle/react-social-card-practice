import React from 'react';
import NewMessage from './NewMessage.js'

const Messages = ({user, handleMessageSubmit}) => {
  return (
    <div>
      <br/>
      <NewMessage handleMessageSubmit={handleMessageSubmit} />
      <ul className="text-left">
        {user.messages.slice(0).reverse().map(message => 
          <li className="w-100 border-bottom" key={message.id}>
            <small>Post #{message.id} - created at {message.createdAt}</small>
            <p>{message.description}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Messages;