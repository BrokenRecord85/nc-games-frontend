import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getReviewByID } from '../utils/api'
import Comments from './Comments'
import Votes from './Votes'

const SingleReview = () => {
   const [review, setReview] = useState({})
   const {review_id} = useParams()
  
 
   useEffect(() => {
        getReviewByID(review_id)
        .then(({review}) => {
          
            setReview(review)
        })
   }, [review_id])


  return (
    <div className='review-main'>
    <div className='single-card'>
        <img src={review.review_img_url} alt="" />
        <div className='info'>
            <h3>{review.title}</h3>
            <h4>Author: {review.owner}</h4>
            <p>{review.review_body}</p>
            <Votes votes={review.votes} review_id={review.review_id}/>
        </div>
        
    </div>
    <Comments review_id={review.review_id}/>
    </div>
  )
}

export default SingleReview