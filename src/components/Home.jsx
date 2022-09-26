import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <main className='main'>
        <Link to='/reviews'>
            <h1>Game Reviews</h1>
        </Link>
        <Link to='/users'>
            <h1>Users</h1>
        </Link>
        
    </main>
  )
}

export default Home