import React, { useEffect, useState } from 'react'
import {getComments} from '../utils/api'
import {AiOutlineLike} from 'react-icons/ai'

const Comments = ({review_id}) => {
  
  console.log(review_id)
  const [comments , setComments] = useState([])
  
  
  console.log(comments)
  useEffect(() => {
    getComments(review_id)
    .then(({data}) => {
      
      setComments(data.comments)
    })
  }, [review_id])
  console.log(comments)

  return (
    <div className='comments-container'>
      <h3>Comments:</h3>
      <ul>
      {comments.map((comment) => {
        return (
          
          <li key={comment.comment_id}>
            <hr />
            <h5 key={comment.comment_id}>{comment.author}</h5>
            <p>{comment.created_at}</p>
            <p>{comment.body}</p>
            <div className='voting-container'>
              <AiOutlineLike size={20} />
              <p>Votes: {comment.votes}</p>    
            </div>
          </li>
        )
      })}
        
          
        
        
      
     
      </ul>
    </div>
  )
}

export default Comments