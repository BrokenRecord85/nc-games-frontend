import React, { useEffect, useState } from 'react'
import { getReviews } from '../utils/api'

const ReviewsList = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews().then(({reviews}) => {
      setReviews(reviews)
    })
  }, [])
  
  console.log(reviews)
  return (
    <div>
      <ul className='gallery'>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h3>{review.title}</h3>
              <img src={review.review_img_url} alt={review.title} />
              <h4>Review : Click here to read</h4>
              <p>Owner: {review.owner}</p>
              <p>Designer: {review.designer}</p>
              <p>Votes: {review.votes}</p>
            </li>         
          )
        })}
      </ul>
    </div>
  )
}

export default ReviewsList