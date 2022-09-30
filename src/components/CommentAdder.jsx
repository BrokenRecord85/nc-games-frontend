import React, { useState } from 'react';
import { postComment } from '../utils/api';


export const CommentAdder = ({ setComments, comments, review_id }) => {
    const [newComment, setNewComment] = useState({author: '', body: ''})
	
	const validAuthors = comments.map((comment) => {
		return comment.author
	})

	

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (!validAuthors.includes(newComment.author)){
			alert('Sign up or log in to comment')
			setNewComment({author: '', body: ''})
		}
		else {
			postComment(newComment, review_id)
			.then(({data}) => {
				setComments((currComments) => {
					return [data.comments, ...currComments]
				})
				
			})
		}

		
        
    	
	};

	return (
		
			<section id='form-section'>
				<form className='comment-form'onSubmit={(e) => handleSubmit(e)}>
					<label htmlFor="author">Author:</label>
					<input
						onChange={(e) => setNewComment((currComment) => ({...currComment, author: e.target.value}))}
						value={newComment.author}
						name="author"
						id="author"
						type="text"
						required
					></input>
					<label htmlFor="price">Your Comment:</label>
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
};