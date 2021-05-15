import axios from 'axios';

const API=axios.create({baseURL:'http://localhost:5000'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile'))
    {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    
    return req;
})

const url='http://localhost:5000/posts';

export const fetchPosts=()=> API.get('/posts');

export const createPost=(newTask)=> API.post('/posts',newTask);

export const editPost= (id,updatePost) => API.patch(`/posts/${id}`,updatePost);

export const signIn = (formData) => API.post('/users/signIn',formData);
export const signUp = (formData) => API.post('/users/signUp',formData);