import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getReviewByID } from '../utils/api'
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
    <Comments loading={loading} setLoading={setLoading} review_id={review.review_id}/>
    </div>
  )
  }
}

export default SingleReview