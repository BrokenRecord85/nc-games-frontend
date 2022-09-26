
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import ReviewsList from './components/ReviewsList'
import UsersList from './components/UsersList'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/reviews' element={<ReviewsList/>}></Route>
        <Route path='/users' element={<UsersList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
