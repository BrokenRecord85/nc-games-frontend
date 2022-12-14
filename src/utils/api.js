import axios from 'axios'

const gamesApi = axios.create({
    baseURL: 'https://pawel-game-api.herokuapp.com/api'
}) 


export const getReviews = (params) => {
    return gamesApi.get('/reviews/', {params}).then((res) => {
        return res.data
    })
}

export const getReviewByID = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data
    })
}

export const getUsers = () => {
    return gamesApi.get('/users').then((res) => {
        return res.data
    })
}

export const getUserByID = (username) => {
    return gamesApi.get(`/users/${username}`).then((res) => {
        return res.data
    })
}

export const getCategories = () => {
    return gamesApi.get('/categories').then((res) => {
        return res.data
    })
}

export const castVote = (review_id, reqBody) => {
    return gamesApi.patch(`/reviews/${review_id}`, reqBody)
}

export const getComments = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}/comments`)
}

export const postComment =(newComment, review_id) => {
    return gamesApi.post(`/reviews/${review_id}/comments`, newComment)
}

export const deleteComment = (comment_id) => {
    return gamesApi.delete(`/comments/${comment_id}`)
}