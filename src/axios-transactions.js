import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://accounting-project-a7918.firebaseio.com/'
});

export default instance;