import axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://eventos-gedal.herokuapp.com'
})

export default instanse;