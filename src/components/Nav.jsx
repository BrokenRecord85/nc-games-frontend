import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
      <Link to='/reviews'>
        <h2>Reviews</h2>
      </Link>      
      <span>||</span>
      <Link to='/users'>
        <h2>Users</h2>
      </Link>
      
    </nav>
  )
}

export default Nav