import React, { useContext, useEffect, useState } from 'react'
import { getReviews} from '../utils/api'
import {Link, useSearchParams} from 'react-router-dom'
import Categories from './Categories'
//import { Drawer, Button } from '@mui/material';
import MyDrawer from './MyDrawer'
import MyOrderDrawer from './MyOrderDrawer'
import Error from './Error'
import {FaCommentAlt} from "react-icons/fa"
import {AiTwotoneLike} from 'react-icons/ai'




const ReviewsList = ({loading, setLoading, params, setParams, error, setError}) => {
  const [reviews, setReviews] = useState([])
  


  
  
  
  
  

  useEffect(() => {
    setLoading(true)
    
    getReviews(params).then(({reviews}) => {
      setReviews(reviews)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
      setError(true)
    })
    
  }, [params])

  
  console.log(params)

  if(error) {
    return <Error />
  }
  
  
  const handleSort = (column) => {
    setParams((currParams) => {
      return {...currParams, sort_by: column}
    })
  }

  const handleOrder = (order) => {
    setParams((currParams) => {
      return {...currParams, order: order}
    })
  }
  
  

  if(loading) {
    return <h1>Loading...</h1>
  }
  
  else {

    
    

      return (
        <main>
          <div className='drawers-box'>
            <MyDrawer handleSort={handleSort}/>
            <MyOrderDrawer handleOrder={handleOrder}/>
          </div>
          
          <Categories />
          
          <ul className='gallery'>
            {reviews.map((review) => {
              return (
                <li className='review-card' key={review.review_id}>
                 
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
            })}
          </ul>
        </main>
      )
    
  
  
  }
}

export default ReviewsList


{/* <Link to={`/reviews/${review.review_id}`}>
                      <h4>Read review</h4>
                    </Link>  */}
                  {/* <p>Owner: {review.owner}</p>
                  <p>Designer: {review.designer}</p> */}
                  {/* <p>Date: {review.created_at}</p> */}