
import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import ReviewsList from './components/ReviewsList'
import UsersList from './components/UsersList'
import ReviewsByCategoriesList from './components/ReviewsByCategoriesList';
import SingleReview from './components/SingleReview';

function App() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/reviews' element={<ReviewsList loading={loading} setLoading={setLoading}/>}></Route>
        <Route path='reviews/:review_id' element={<SingleReview setLoading={setLoading} loading={loading}/>}></Route>
        <Route path='reviews/categories/:category' element={<ReviewsByCategoriesList loading={loading} setLoading={setLoading}/>}></Route>
        <Route path='/users' element={<UsersList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
