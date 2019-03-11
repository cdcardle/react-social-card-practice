import React from 'react';
import UserPanel from './UserPanel.js'
import Messages from './Messages.js'

const Card = ({handleSubmit, user}) => {
  return (
    <div className="row"> 
      <div className="col-sm-3 border border-right-0"><UserPanel user={user} /></div>
      <div className="col-sm-6 border"><Messages user={user} handleSubmit={handleSubmit} /></div>
      <div className="col-sm-3 border border-left-0">Trending Column</div>
    </div>
  )
}

export default Card;