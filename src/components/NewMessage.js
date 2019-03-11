import React from 'react';

const Messages = ({user, handleSubmit}) => {
  return (
    <div>
      <form class="form-row" onSubmit={handleSubmit}>
        <textarea class="form-control" placeholder="New message..."/>
        <button class="btn btn-sm btn-outline-success" type="submit">Post Message</button>
      </form>
    </div>
  )
}

export default Messages;