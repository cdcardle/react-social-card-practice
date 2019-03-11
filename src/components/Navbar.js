import React from 'react';

const Navbar = ({handleClick, username}) => {
  return (
    <div>
      <nav class="navbar">
        <div>
          <a class="navbar-brand" onClick={handleClick} href="/">Homepage</a>
          <a class="navbar-brand" onClick={handleClick} href="/">About</a>
        </div>
        <div className="list-inline">
          Welcome, {username}!
          <button class="btn btn-outline-success" onClick={handleClick} href="/">Signout</button>
        </div>
        <form class="form-inline">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" onClick={handleClick} type="submit">Search</button>
        </form>
      </nav>
    </div>
  )
}

export default Navbar;