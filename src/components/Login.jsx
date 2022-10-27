import React from 'react'
import {useState, useContext, useEffect} from 'react'
import LoginContext from '../context/LoginProvider';
import {getUsers} from '../utils/api'
import { useNavigate} from 'react-router-dom'

const Login = () => {
    const { login,setLogin } = useContext(LoginContext)
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        getUsers()
        .then((data) => {
            setUsers(data.users)
        })
    },[])

    const handleClick = (e) => {
        
        console.log(e.target.alt)
        setLogin(e.target.alt)
        navigate(-1)
    }
    
  return (
    <div>
        <h1>Choose a user to login</h1>
        <ul className='gallery'>
        {users.map((user) => {
          return (
            <li className='review-card'id='user' key={user.username}>
                <h3>{user.username}</h3>
                {!login ? <img src={user.avatar_url} alt={user.username} id='user-img' onClick={(e) => handleClick(e)} value={user.username}/> :  <img src={user.avatar_url} alt={user.username} />}  
                
                <p>{user.name}</p>
            </li>         
          )
        })}
      </ul>
    </div>
  )
}

export default Login