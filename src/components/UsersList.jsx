import React from 'react'
import {useState, useEffect} from 'react'
import {getUsers} from '../utils/api'
import { Link } from 'react-router-dom'

const UsersList = () => {
    
    const [users, setUsers] = useState([])
    
    
    useEffect(() => {
        getUsers()
        .then((data) => {
            setUsers(data.users)
        })
        
    },[])

    
    
  return (
    <div>
        <h1>Our reviewers</h1>
        <ul className='gallery'>
        {users.map((user) => {
          return (
            <Link to={`${user.username}`} key={user.username}>
            <li className='review-card'id='user' key={user.username}>
                <h3>{user.username}</h3>
                <img src={user.avatar_url} alt={user.username} />   
                <p>{user.name}</p>
            </li>
            </Link>    
          )
        })}
      </ul>
    </div>
  )
}

export default UsersList