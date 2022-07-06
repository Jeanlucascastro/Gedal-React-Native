import axios from 'axios';

const instanse = axios.create({
    baseURL: 'http://192.168.0.9:8080'
})

export default instanse;