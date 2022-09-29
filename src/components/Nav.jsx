import React from 'react'
import {Link} from 'react-router-dom'
import Categories from './Categories'
import {FaChessPawn, FaDiceFive, FaChessBoard} from 'react-icons/fa'

const Nav = () => {
  return (
    <div className='main-nav'>
      <div className='logo'>
        <FaChessBoard size={29}/>
        <h2>NC-GAMES</h2>
      </div>
      
      
      <nav className='navbar'>
        <Link to='/reviews'>
          <h2>Reviews</h2>
        </Link>      
        <span>
        <FaChessPawn size={29}/>
        </span>
        <Link to='/users'>
          <h2>Users</h2>
        </Link>       
      </nav>

      <div className='dice'>
      <FaDiceFive size={29}/>
      <h2>Log in</h2>
      </div>
      
    </div>
  )
}

export default Nav