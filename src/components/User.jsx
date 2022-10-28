import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { getUserByID } from '../utils/api'

const User = () => {
    const navigate = useNavigate()
    const {username} = useParams()
    const [user, setUser] = useState({})
    
    useEffect(()=> {
        getUserByID(username)
        .then(({user}) => {
          
          setUser(user)
        })
        .catch((err) => {
          navigate('*')
        })
   }, [username])
   
  return (
    <div className='user-profile'>
        <h1>{user.username}</h1>
        <img src={user.avatar_url} alt={user.username}/>
        <h2>{user.name}</h2>
    </div>
  )
}

export default User
