import React from 'react'
import {Link} from 'react-router-dom'
import {AiTwotoneLike} from 'react-icons/ai'
import {FaCommentAlt} from "react-icons/fa"

const ReviewCard = ({review}) => {
  return (
            <li className='review-card' >
                 
                  <Link to={`/reviews/${review.review_id}`}>
                  <img src={review.review_img_url} alt={review.title} />
                  </Link>
                  <div className='info-card'>
                  <Link to={`/reviews/${review.review_id}`}>
                    <h3><span>Review |</span> {review.title}</h3>
                  </Link>
                  <div className='info-box'>
                    <div className='votes-box'>
                      <AiTwotoneLike/>
                      <p>{review.votes} votes</p>
                    </div>
                    
                    <div className='comments-box'>
                    <FaCommentAlt/> 
                    <p>{review.comment_count} comments</p>
                    </div>
                  </div>
                 
                  
                  
                  </div>
                  <div className='category-box'>
                    <Link to={`/reviews/categories/${review.category}`}>
                        <p id='category-tag'>{review.category}</p>
                    </Link>
                  </div>
            </li>         
  )
}

export default ReviewCard