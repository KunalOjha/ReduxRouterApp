import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'; 
const API_KEY= '?key=kunal'

export const FETCH_POSTS = 'FETCH_POSTS';  
export const CREATE_POSTS = 'CREATE_POSTS'

export function fetchPosts() {
  
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
        .then(function (response) {
        console.log('promise resolved',response);
        return response
        })
        .catch(function (error) {
        console.log(error);
        });
        console.log(request);
        return {
            type: FETCH_POSTS,
            payload: request
        };
    }
    
export function createPost(values) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

    return {
        type: CREATE_POSTS,
        payload: request
    }
};