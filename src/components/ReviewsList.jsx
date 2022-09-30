import React, { useEffect, useState } from 'react'
import { getReviews} from '../utils/api'
import {Link} from 'react-router-dom'
import Categories from './Categories'
//import { Drawer, Button } from '@mui/material';
import MyDrawer from './MyDrawer'




const ReviewsList = ({loading, setLoading}) => {
  const [reviews, setReviews] = useState([])
  const [showDrawer, setShowDrawer] = useState(false)
  

  useEffect(() => {
    setLoading(true)
    getReviews().then(({reviews}) => {
      setReviews(reviews)
      setLoading(false)
    })
  }, [])
  

  const handleDrawer = () => {
    setShowDrawer(true)
  }

  if(loading) {
    return <h1>Loading...</h1>
  }
  
  else {

    // if(!showDrawer) {
    //   //const anchor = 'left'
    //     // <React.Fragment key={anchor}>
    //     //   <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
    //     //   <Drawer
    //     //     anchor={anchor}
    //     //     open={state[anchor]}
    //     //     onClose={toggleDrawer(anchor, false)}
    //     //   >
    //     //     {list(anchor)}
    //     //   </Drawer>
    //     // </React.Fragment>
    //   <MyDrawer/>
    // }
    

      return (
        <main>
          <MyDrawer/>
          <Categories />
          <button onClick={handleDrawer}>Sort By</button>
          <ul className='gallery'>
            {reviews.map((review) => {
              return (
                <li className='review-card' key={review.review_id}>
                  <Link to={`/reviews/${review.review_id}`}>
                    <h3>{review.title}</h3>
                  </Link>
                  <Link to={`/reviews/${review.review_id}`}>
                  <img src={review.review_img_url} alt={review.title} />
                  </Link>
                  <Link to={`/reviews/${review.review_id}`}>
                      <h4>Read review</h4>
                    </Link> 
                  
                  
                  <p>Owner: {review.owner}</p>
                  <p>Designer: {review.designer}</p>
                  <Link to={`/reviews/categories/${review.category}`}>
                      <p id='category-tag'>category: {review.category}</p>
                  </Link>
                  
                </li>         
              )
            })}
          </ul>
        </main>
      )
    
  
  
  }
}

export default ReviewsList