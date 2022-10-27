import React, { useEffect, useState, useContext } from 'react'
import {getComments, deleteComment} from '../utils/api'
import {AiOutlineLike} from 'react-icons/ai'
import {CommentAdder} from './CommentAdder'
import { useParams } from 'react-router'
import LoginContext from '../context/LoginProvider';


const Comments = ({loading, setLoading}) => {
  const {review_id} = useParams()
  const [comments , setComments] = useState([])
  const [deleted, setDeleted] = useState(false)
  const { login} = useContext(LoginContext)
  
  
 
  useEffect(() => {
    setLoading(true)
    getComments(review_id)
    .then(({data}) => {
      
      setComments(data.comments)
      
    })
    setLoading(false)
  }, [review_id, deleted])

  console.log(deleted)
  const handleDelete = (comment_id) => {
    setLoading(true) 
    deleteComment(comment_id)
    .then(() => {
      setDeleted(true)
      
    })   
    setLoading(false)
    
  }

  useEffect(() => {
    if(deleted) {
        setTimeout(() => {
            setDeleted(false)
          }, 1000);
    }
  } , [deleted])
  
  
  if(loading) {
    return <h1>Loading...</h1>
  }

  

 else {

  

  if(deleted) {
    
      
      
      return (<h2>Deleting your comment......</h2>)
      
   
  }

  else {
  return (
    
    <div className='comments-container'>
      <CommentAdder setComments={setComments} comments={comments} review_id={review_id}/>
      
      <h3>Comments:</h3>
      {comments.length === 0 ? <h3>No comments yet. Add one if you'd like</h3> :
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
              <p>{comment.votes} votes</p>    
            </div>
            {login === comment.author? <button onClick={() => handleDelete(comment.comment_id)} className='delete-btn'> Delete comment</button> : <></>}
            
          </li>
        )
      })}
     
      </ul>}
    </div>
    
  )
  }
 }
}

export default Comments