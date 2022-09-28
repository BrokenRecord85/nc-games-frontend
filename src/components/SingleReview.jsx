import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getReviewByID } from '../utils/api'

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
    <div className='single-card'>
        <img src={review.review_img_url} alt="" />
        <div className='info'>
            <h3>{review.title}</h3>
            <h4>Author: {review.owner}</h4>
            <p>{review.review_body}</p>
            <button id='votes-btn'>Votes: {review.votes}</button>
        </div>

    </div>
  )
}

export default SingleReview