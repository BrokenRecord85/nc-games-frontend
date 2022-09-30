import React from 'react'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaChessPawn, FaDiceFive, FaChessBoard} from 'react-icons/fa'
import LoginContext from '../context/LoginProvider';

const Nav = () => {
  const { login,setLogin } = useContext(LoginContext)

  const handleLogout = () => {
      setLogin('')
  }

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
      {!login ? 
      <Link to='/login'>
        <h2>Log in</h2> 
      </Link> : <h2 id='logout' onClick={handleLogout}>{login} log out</h2>}
     
      </div>
      
    </div>
  )
}

export default Nav