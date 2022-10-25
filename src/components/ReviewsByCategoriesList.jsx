import React, { useState, useEffect, useContext } from 'react'
import {useParams, Link} from 'react-router-dom'
import { getReviews } from '../utils/api'
import Categories from './Categories'
import MyDrawer from './MyDrawer'
import MyOrderDrawer from './MyOrderDrawer'


const ReviewsByCategoriesList = ({loading, setLoading, params, setParams }) => {
  const [reviewsByCategory, setReviewsByCategory] = useState([])
  const {category} = useParams()
  
  useEffect(() => {
    setParams({category})
  }, [category])
  
  useEffect(() => {
    setLoading(true)
    
    getReviews(params).then(({reviews}) => {
      setReviewsByCategory(reviews)
      setLoading(false)
    })
  }, [params])

  

  const handleCategorySort = (column) => {
    setParams((currParams) => {
      return {...currParams, sort_by: column}
    })
  }

  const handleCategoryOrder = (order) => {
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
            <MyDrawer handleSort={handleCategorySort}/>
            <MyOrderDrawer handleOrder={handleCategoryOrder}/>
      </div>
      <Categories />
      <h2>{category[0].toUpperCase() + category.slice(1)}</h2>
      <ul className='gallery'>
          {reviewsByCategory.map((reviewByCategory) => {
            const {review_id, title, review_img_url, owner, designer, votes, created_at, comment_count} = reviewByCategory
            return (
              <li className='review-card' key={review_id}>
                <Link to={`/reviews/${review_id}`}>
                  <h3>{title}</h3>
                </Link>
                <Link to={`/reviews/${review_id}`
              
              }>
                <img src={review_img_url} alt={title} />
                </Link>
                <h4>Review : Click here to read</h4>
                <p>Owner: {owner}</p>
                <p>Designer: {designer}</p>
                <p>Votes: {votes}</p>
                <p>Comments: {comment_count}</p>
                <p>Date: {created_at}</p>
              </li>         
            )
          })}
        </ul>
      </main>
  )
  }
}

export default ReviewsByCategoriesList