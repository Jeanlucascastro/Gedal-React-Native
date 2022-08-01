import axios from 'axios';

const instanse = axios.create({
    baseURL: 'http://10.128.40.114:8080'
})

export default instanse;