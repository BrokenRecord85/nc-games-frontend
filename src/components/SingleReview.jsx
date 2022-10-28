import React, { useEffect, useState, Suspense } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { getReviewByID, getUserByID, getUsers } from '../utils/api'
import Comments from './Comments'
import Votes from './Votes'





const SingleReview = ({loading, setLoading}) => {
   const navigate = useNavigate()
   const [review, setReview] = useState({})
   const [user, setUser] = useState({})
   const {review_id} = useParams()
  
  
 
   useEffect(() => {
    setLoading(true)
        getReviewByID(review_id)
        .then(({review}) => {
          
            setReview(review)
            setLoading(false)
        })
        .catch((err) => {
          navigate('*')
        })
        
        
   }, [review_id])

   useEffect(()=> {
        if (review.owner === undefined) {
          console.log('Waiting for user data...')
        }
        else {
          getUserByID(review.owner)
          .then(({user}) => {
            setUser(user)
          
          })
          .catch((err) => {
            console.log('Waiting for user data...');
          })
        }
        
   }, [review])
  
  const dateFormat = new Date(review.created_at)
  const date =`${dateFormat.getDate()}/${dateFormat.getMonth()+1}/${dateFormat.getFullYear()}
  at ${dateFormat.getHours()}:${dateFormat.getMinutes()}`
  
   
  if(loading) {
    return <h1>Loading...</h1>
  }

  else {
  return (
    <>
    <div className='single-card'>
        <div className='title-container'>
          <h1>{review.title}</h1>
          <hr />
        </div>
        
        <div className='single-card-header'>
          
          <img id='profile-pic' src={user.avatar_url} alt=""/>
          <div>
            <h4>Review by: {review.owner}</h4>
            <p>Published on {date}</p>
          </div>
          
          
       
        </div>
        <img src={review.review_img_url} alt="" />
        <div className='info'>
            
            <ul>
              <li id='category-tag'><span>Category:</span> {review.category}</li>
              <li><span>Owner:</span> {review.designer}</li>
              <li><span>Reviewed by:</span> {review.owner}</li>
            </ul> 
            
            <p>{review.review_body}</p>
            
        </div>
        
    </div>
    <Votes votes={review.votes} review_id={review.review_id}/>
    <Comments loading={loading} setLoading={setLoading} review_id={review.review_id}/>
    </>
  )
  }
}

export default SingleReview