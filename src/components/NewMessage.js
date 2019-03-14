import React from 'react';

const Messages = ({user, handleMessageSubmit}) => {
  return (
    <div>
      <form className="form-row" onSubmit={handleMessageSubmit}>
        <input type="text" className="form-control" placeholder="New message..."></input>
        <button className="btn btn-sm btn-outline-success" type="submit">Post Message</button>
      </form>
    </div>
  )
}

export default Messages;