import React from 'react';
import NewMessage from './NewMessage.js'

const Messages = ({user, handleSubmit}) => {
  return (
    <div>
      <br/>
      <NewMessage handleSubmit={handleSubmit} />
      <ul className="text-left">
        {user.messages.slice(0).reverse().map(message => 
          <li class="w-100 border-bottom">
            <small>Post #{message.id} - created at {message.createdAt}</small>
            <p>{message.description}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Messages;