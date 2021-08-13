import axios from 'axios'

const KEY = "AIzaSyA-vD3hrg-l0nLCUyF-_8hp1pyKtOPop8Y";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key:KEY
    }
});