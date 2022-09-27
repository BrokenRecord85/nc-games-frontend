import React from 'react'
import {Link} from 'react-router-dom'
import Categories from './Categories'

const Nav = () => {
  return (
    <div className='main-nav'>
      <h2>NC-GAMES</h2>
      <nav className='navbar'>
        <Link to='/reviews'>
          <h2>Reviews</h2>
        </Link>      
        <span>||</span>
        <Link to='/users'>
          <h2>Users</h2>
        </Link>       
      </nav>
      
    </div>
  )
}

export default Nav