import React from 'react'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../context/ThemeProvider';
import Switch from '@mui/material/Switch'
import {FaSun, FaMoon} from "react-icons/fa"

const Header = ({toggleTheme}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <header className='header'>
      <Link to='/'>
        <h1>We play them all so you don't have to</h1>
      </Link>
      <div className='switch'>
        {theme === 'dark'?  <FaSun/> : <FaMoon/>}
        <Switch  onChange={toggleTheme} />
      </div>
      
      
    </header>
  )
}

export default Header