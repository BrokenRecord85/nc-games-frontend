import React, { useState, useContext } from 'react';
import { postComment } from '../utils/api';
import LoginContext from '../context/LoginProvider';
import {Link} from 'react-router-dom'


export const CommentAdder = ({ setComments, comments, review_id }) => {
	const { login,setLogin } = useContext(LoginContext)
    const [newComment, setNewComment] = useState({author: login, body: ''})

	


	

	const handleSubmit = (e) => {
		e.preventDefault();
		
		
		
			postComment(newComment, review_id)
			.then(({data}) => {
				setComments((currComments) => {
					return [data.comments, ...currComments]
				})
				setNewComment({author: login, body: ''})
				
			})
		

		
        
    	
	};

	if (!login) {

		return (
			<Link to={'/login'}>
				<button id='comment-btn'>Log in to comment</button>
			</Link>
		)
	}

	else {

	

	return (
		
			<section id='form-section'>
				<form className='comment-form'onSubmit={(e) => handleSubmit(e)}>
					<h3>Author: {login}</h3>				
					<label htmlFor="comment">Your Comment:</label>
					<textarea
						onChange={(e) => setNewComment((currComment) => ({...currComment,body: e.target.value}))}
						value={newComment.body}
						name="body"
						id="body"
						type="text"
						required
					></textarea>
					
					<button id='comment-btn'>Add Comment</button>
				</form>
			</section>
		
	);
	}
};