import {AUTH} from '../constants/actionTypes';
import * as api from '../api/index.js'
import { toast } from "react-toastify";


export const signin = (formData,history) => async(dispatch) =>
{
    try{

        const {data}= await api.signIn(formData);
        dispatch({type:AUTH,data});
        history.push('/home');        
    }
    catch(err)
    {
        toast.error(err.response.data.message);
        console.log(err.response.data.message);
    }
}

export const signup = (formData,history) => async(dispatch) =>
{
    try{

        
        const {data}= await api.signUp(formData);
        toast.success("User created successfully");
        dispatch({type:AUTH,data});
        history.push('/home');


        
    }
    catch(err)
    {
        toast.error(err.response.data.message);
        console.log(err.response.data.message);
    }
}