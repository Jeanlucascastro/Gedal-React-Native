import axios from 'axios';

const instanse = axios.create({
    baseURL: 'http://192.168.1.108:3000'
})

export default instanse;