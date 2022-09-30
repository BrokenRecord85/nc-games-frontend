import React, { useEffect, useState } from 'react'
import {getComments} from '../utils/api'
import {AiOutlineLike} from 'react-icons/ai'
import {CommentAdder} from './CommentAdder'
import { useParams } from 'react-router'

const Comments = ({loading, setLoading}) => {
  const {review_id} = useParams()
  
  
  const [comments , setComments] = useState([])
  
  
 
  useEffect(() => {
    setLoading(true)
    getComments(review_id)
    .then(({data}) => {
      
      setComments(data.comments)
      
    })
    setLoading(false)
  }, [review_id])
  
  
  if(loading) {
    return <h1>Loading...</h1>
  }

  else {

  return (
    
    <div className='comments-container'>
      <CommentAdder setComments={setComments} comments={comments} review_id={review_id}/>
      <h3>Comments:</h3>
      <ul>
      {comments.map((comment, index) => {
        return (
          
          <li key={index}>
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
}

export default Comments