import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/amazon-clone/us-centrall/api'
});

export default instance;