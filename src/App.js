
import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import ReviewsList from './components/ReviewsList'
import UsersList from './components/UsersList'
import ReviewsByCategoriesList from './components/ReviewsByCategoriesList';

function App() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/reviews' element={<ReviewsList loading={loading} setLoading={setLoading}/>}></Route>
        <Route path='reviews/categories/:category' element={<ReviewsByCategoriesList loading={loading} setLoading={setLoading}/>}></Route>
        <Route path='/users' element={<UsersList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
