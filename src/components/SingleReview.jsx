import React, { useState } from 'react'
import {useParams} from 'react-router-dom'

const SingleReview = () => {
   const [review, setReview] = useState({})
   const {review_id} = useParams()
   console.log(review_id)

  return (
    <div>SingleReview</div>
  )
}

export default SingleReview