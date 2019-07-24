import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID b0d1b058f017913e6786a87c51a79e531d586d398072145588c4f1827dbd9ab7'
    }
});