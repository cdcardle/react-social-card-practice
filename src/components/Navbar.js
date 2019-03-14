import React from 'react';

const Navbar = ({handleClick, username}) => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <a className="navbar-brand" onClick={handleClick} href="/">Homepage</a>
          <a className="navbar-brand" onClick={handleClick} href="/">About</a>
        </div>
        <div className="list-inline">
          Welcome, {username}!
          <button className="btn btn-outline-success" onClick={handleClick} href="/">Signout</button>
        </div>
        <form className="form-inline">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" onClick={handleClick} type="submit">Search</button>
        </form>
      </nav>
    </div>
  )
}

export default Navbar;