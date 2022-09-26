import axios from 'axios'

const gamesApi = axios.create({
    baseURL: 'https://pawel-game-api.herokuapp.com/api'
}) 


export const getReviews = (category) => {
    console.log(category, 'API heeeeeeeeeeeeeeeeeeeeeeeerrree')
    return gamesApi.get('/reviews', {params: {category}}).then((res) => {
        return res.data
    })
}

export const getUsers = () => {
    return gamesApi.get('/users').then((res) => {
        return res.data
    })
}