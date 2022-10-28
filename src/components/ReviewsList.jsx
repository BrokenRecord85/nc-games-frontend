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
import ReviewCard from './ReviewCard'




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
                <ReviewCard review={review} key={review.review_id} />
                
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