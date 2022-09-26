import React, { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import { getReviews } from '../utils/api'

const ReviewsByCategoriesList = ({loading, setLoading}) => {
  const [reviewsByCategory, setReviewsByCategory] = useState([])
  
  const {category} = useParams()
  useEffect(() => {
    setLoading(true)
    getReviews(category).then(({reviews}) => {
      setReviewsByCategory(reviews)
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
          {reviewsByCategory.map((reviewByCategory) => {
            const {review_id, title, review_img_url, owner, designer} = reviewByCategory
            return (
              <li className='review-card' key={review_id}>
                <Link to='/reviews/:review_id'>
                  <h3>{title}</h3>
                </Link>
                <Link to='/reviews/:review_id'>
                <img src={review_img_url} alt={title} />
                </Link>
                <h4>Review : Click here to read</h4>
                <p>Owner: {owner}</p>
                <p>Designer: {designer}</p>
              </li>         
            )
          })}
        </ul>
      </div>
  )
  }
}

export default ReviewsByCategoriesList