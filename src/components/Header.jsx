import React from 'react'
import {Link} from 'react-router-dom'
import Categories from './Categories'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <h1>We review them so you don't have to!!</h1>
      </Link>
      <Categories />
    </header>
  )
}

export default Header