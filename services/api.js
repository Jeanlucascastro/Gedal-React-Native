import axios from 'axios';

const instanse = axios.create({
    baseURL: 'http://192.168.0.197:8080'
})

export default instanse;