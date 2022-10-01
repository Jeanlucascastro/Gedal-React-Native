import axios from 'axios';

const instanse = axios.create({
    baseURL: 'http://192.168.0.197:3020'
})

export default instanse;