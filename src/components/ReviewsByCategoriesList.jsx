import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getReviews } from '../utils/api'
import Categories from './Categories'
import MyDrawer from './MyDrawer'
import MyOrderDrawer from './MyOrderDrawer'
import ReviewCard from './ReviewCard'


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
      <Categories setParams={setParams}/>
      <h2>{category[0].toUpperCase() + category.slice(1)}</h2>
      <ul className='gallery'>
          {reviewsByCategory.map((reviewByCategory) => {
            
            return (
              <ReviewCard review={reviewByCategory} key={reviewByCategory.review_id} />
              
            )
          })}
        </ul>
      </main>
  )
  }
}

export default ReviewsByCategoriesList