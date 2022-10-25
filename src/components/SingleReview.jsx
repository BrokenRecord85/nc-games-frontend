import React, { useEffect, useState, Suspense } from 'react'
import {useParams} from 'react-router-dom'
import { getReviewByID, getUsers } from '../utils/api'
import Comments from './Comments'
import Votes from './Votes'

const SingleReview = ({loading, setLoading}) => {
   const [review, setReview] = useState({})
   const {review_id} = useParams()
   
  
 
   useEffect(() => {
    setLoading(true)
        getReviewByID(review_id)
        .then(({review}) => {
          
            setReview(review)
            setLoading(false)
        })
        
        
   }, [review_id])

  

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
          
          
          <h4>Review by: {review.owner}</h4>
          <p>Published on {review.created_at}</p>
          
       
        </div>
        <img src={review.review_img_url} alt="" />
        <div className='info'>
            
            
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