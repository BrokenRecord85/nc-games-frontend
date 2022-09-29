import React from 'react'
import {Link} from 'react-router-dom'
import {FaChessPawn} from 'react-icons/fa'

const Home = () => {
  return (
    <main className='main'>
        <Link to='/reviews'>
            <h1>Game Reviews</h1>
        </Link>
        
        <FaChessPawn size={46}/>
        <Link to='/users'>
            <h1>Users</h1>
        </Link>
        
    </main>
  )
}

export default Home