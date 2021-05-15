import { MailIcon } from '@heroicons/react/solid'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import {signin} from '../actions/auth';
import logo from './../image/logo1.png'



const initialState={email:'',password:''}


export default function Login() {
  const [formData,setFormData]=useState(initialState);
  const dispatch=useDispatch();
  const history = useHistory();
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})

  }
  const handleSubmit = (e) =>{

    e.preventDefault();
   
    dispatch(signin(formData,history));
    }
  const googleSuccess =(resp)=>
  {
    const profile=resp?.profileObj;
    const token= resp?.tokenId;

    try{
      
      dispatch({type:'AUTH',data:{profile,token}});
      history.push('/home');
    }
    catch(error)
    {

    }
  }

  const googleFailure = () =>
  {
    
    console.log("Unsucessful Login Attempt. Try again later.")
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-2">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src={logo}
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              onChange={handleChange}
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

        
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
          <div>
          <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?
          <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign Up
          </a>
        </p>
          </div>
         
        </div>
      </form>
      <hr className="mt-6 border-b-1 border-blueGray-500"></hr>
          <div className="btn-wrapper text-center">
          <GoogleLogin
        clientId="922756596800-tq1kf7e7hv0o8m1cplctj7qbpomqe7dg.apps.googleusercontent.com"
        render={(renderProps)=>(
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={renderProps.onClick}>
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 25" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" clipRule="evenodd" />
            </svg>
          </span>
          Google Sign In
        </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
            
          
          </div>
    </div>
  </div>
      

            
   
  )
}
