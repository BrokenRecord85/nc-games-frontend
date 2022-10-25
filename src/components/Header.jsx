import React from 'react'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../context/ThemeProvider';
import Switch from '@mui/material/Switch'

const Header = ({toggleTheme}) => {
  const { theme,setTheme } = useContext(ThemeContext)
  return (
    <header className='header'>
      <Link to='/'>
        <h1>We play them all so you don't have to!!</h1>
      </Link>
      <Switch onChange={toggleTheme} />
      
    </header>
  )
}

export default Header