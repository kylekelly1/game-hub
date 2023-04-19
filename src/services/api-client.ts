import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '35ea75671a88459aacae1a83d1c5a6ce'
    }
})