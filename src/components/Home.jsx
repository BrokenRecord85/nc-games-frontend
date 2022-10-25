import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaChessPawn} from 'react-icons/fa'

const Home = () => {
  const [rotate, setRotate] = useState('')

  

  const toggleRotate = () => {
    setRotate((currPos) => (currPos === '' ? 'pawn' : '' ))
  }

  return (
    <main className='home'>
        <Link to='/reviews'>
            <h1 >Game Reviews</h1>
        </Link>
        
          
          <FaChessPawn size={46} className={rotate}/>
      
        <Link to='/users'>
            <h1 onMouseEnter={toggleRotate} onMouseLeave={toggleRotate}>Users</h1>
        </Link>
        
    </main>
  )
}

export default Home