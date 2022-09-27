import axios from 'axios'

const gamesApi = axios.create({
    baseURL: 'https://pawel-game-api.herokuapp.com/api'
}) 


export const getReviews = (category, reviewid) => {
    return gamesApi.get('/reviews', {params: {category, reviewid}}).then((res) => {
        return res.data
    })
}

export const getUsers = () => {
    return gamesApi.get('/users').then((res) => {
        return res.data
    })
}

export const getCategories = () => {
    return gamesApi.get('/categories').then((res) => {
        return res.data
    })
}