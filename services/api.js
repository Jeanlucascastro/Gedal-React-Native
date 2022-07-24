import axios from 'axios';

const instanse = axios.create({
    baseURL: 'http://192.168.1.108:8080'
})

export default instanse;