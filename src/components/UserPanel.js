import React from 'react';

const UserPanel = ({user}) => {
  return (
    <div className="container">
      <br/>
      <img alt="profile" className="rounded-circle" src={user.image_url} width="100%" height="100%"></img>
      <small>Bio: {user.bio}</small><br/>
      <small>Location: {user.city}, {user.locationState}</small><br/>
      <small>Member since: {user.signupDate}</small>
    </div>
  )
}

export default UserPanel;