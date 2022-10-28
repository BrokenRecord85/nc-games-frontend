
import './App.css';
import { useState, useContext, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import ReviewsList from './components/ReviewsList'
import UsersList from './components/UsersList'
import ReviewsByCategoriesList from './components/ReviewsByCategoriesList';
import SingleReview from './components/SingleReview';
import Login from './components/Login';
import User from './components/User'

import ThemeContext from './context/ThemeProvider';


function App() {
  const [loading, setLoading] = useState(false)
  const [params, setParams] = useState({})
  const [error, setError] = useState(false)
  const { theme,setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === 'light' ? 'dark' : 'light' ))
  }

  useEffect(() => {
    if(theme === 'dark') {
      document.body.setAttribute('id', 'dark')
    } else {
      document.body.removeAttribute('id', 'dark')
    }
  
    
  }, [theme])
  

  return (
    
    <div className="App" id={theme}>
      <Nav setParams={setParams}/>
      <Header toggleTheme={toggleTheme}/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
        <Route path='/reviews' element={<ReviewsList loading={loading} setLoading={setLoading} params={params} setParams={setParams}/>}></Route>
        <Route path='reviews/:review_id' element={<SingleReview setLoading={setLoading} loading={loading} error={error} setError={setError}/>}></Route>
        <Route path='reviews/categories/:category' element={<ReviewsByCategoriesList loading={loading} setLoading={setLoading} params={params} setParams={setParams}/>}></Route>
     
        <Route path='/users' element={<UsersList/>}></Route>
        <Route path='/users/:username' element={<User/>}></Route>
      </Routes>
      
    </div>
    
  );
}

export default App;
