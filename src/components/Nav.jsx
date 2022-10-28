import React, { useState } from 'react'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaChessPawn, FaDiceFive, FaChessBoard} from 'react-icons/fa'
import LoginContext from '../context/LoginProvider';

const Nav = ({setParams}) => {
  const { login,setLogin } = useContext(LoginContext)
  const [roll, setRoll] = useState('')

  const handleLogout = () => {
      setLogin('')
  }

  const toggleRoll = () => {
    setRoll((currPos) => (currPos === '' ? 'dice-rotate' : '' ))
  }


  return (
    <div className='main-nav'>
      <Link to='/'>
        <div className='logo'>
          <FaChessBoard size={29}/>
          <h2>BRD-GAMES</h2>
        </div>
      </Link>
      
      <nav className='navbar'>
        <Link to='/reviews'>
          <h2 onClick={()=> setParams({})}>Reviews</h2>
        </Link>      
        <span>
        <FaChessPawn size={29}/>
        </span>
        <Link to='/users'>
          <h2>Users</h2>
        </Link>       
      </nav>

      <div className='dice'>
      <FaDiceFive size={29} className={roll}/>
      {!login ? 
      <Link to='/login'>
        <h2 onMouseEnter={toggleRoll} onMouseLeave={toggleRoll}>Log in</h2> 
      </Link> : <h2 id='logout' onClick={handleLogout} >{login} log out</h2>}
     
      </div>
      
    </div>
  )
}

export default Nav