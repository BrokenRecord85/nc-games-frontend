import React, { useEffect, useState } from 'react'
import { getReviews} from '../utils/api'
import {Link} from 'react-router-dom'

const ReviewsList = ({loading, setLoading}) => {
  const [reviews, setReviews] = useState([])
  

  useEffect(() => {
    setLoading(true)
    getReviews().then(({reviews}) => {
      setReviews(reviews)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  }

  else {
  
  return (
    <div>
      <ul className='gallery'>
        {reviews.map((review) => {
          return (
            <li className='review-card' key={review.review_id}>
              <Link to='/reviews/:review_id'>
                <h3>{review.title}</h3>
              </Link>
              <Link to='/reviews/:review_id'>
              <img src={review.review_img_url} alt={review.title} />
              </Link>
              <h4>Review : Click here to read</h4>
              <p>Owner: {review.owner}</p>
              <p>Designer: {review.designer}</p>
              <Link to={`/reviews/categories/${review.category}`}>
                  <p id='category-tag'>category: {review.category}</p>
              </Link>
              
            </li>         
          )
        })}
      </ul>
    </div>
  )
  }
}

export default ReviewsList