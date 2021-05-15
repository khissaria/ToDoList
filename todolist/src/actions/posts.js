import * as api from '../api';
import { toast } from "react-toastify";

//Action Creators
export const getPosts=()=> async (dispatch)=>{
    try{
        const {data}=await api.fetchPosts();
        dispatch({type:'FETCH_ALL',payload:data})
    }
    catch(err)
    {
        toast.error(err.response.data.message);
        console.log(err.message);
    }
   
};

export const createPost = (post) => async(dispatch) => {
    try{
        
         const {data}=await api.createPost(post);
         toast.success("Task Added Successfully");
         dispatch({type:'CREATE',payload:data})
    }
    catch(err)
    {
        toast.error(err.response.data.message);
        console.log(err);
    }
};

export const editPost =(id,post) => async(dispatch) => {
    try{
        const { data } = await api.editPost(id,post);
        toast.success("Task updated successfully");
        dispatch({type:'EDIT',payload:data})
    }
    catch(err)
    {
        toast.error(err.response.data.message);
        console.log(err);
    }
};