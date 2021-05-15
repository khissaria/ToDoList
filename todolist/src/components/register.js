import { LockClosedIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import {signup} from '../actions/auth';
import { toast, ToastContainer } from "react-toastify";
import logo from './../image/logo1.png'
import "react-toastify/dist/ReactToastify.css";

const initialState={userName:'',email:'',password:'',cnfPassword:''}

const Register=()=> {

  const [formData,setFormData]=useState(initialState);
  const dispatch=useDispatch();
  const history = useHistory();
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})

  }
  const handleSubmit = (e) =>{

    e.preventDefault();
   
    dispatch(signup(formData,history));
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
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
        
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="col-span-6 sm:col-span-3">
        <div>
            <label htmlFor="username" className="sr-only">
              Email address
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              onChange={handleChange}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              autoComplete="email"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="cnfpassword" className="sr-only">
              Password
            </label>
            <input
              id="cnfPassword"
              name="cnfPassword"
              type="password"
              onChange={handleChange}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Confirm Password"
            />
          </div>
        </div>


        <div>
          <button
            type="submit"
            // onClick={handleSubmit}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign Up
          </button>
          <div>
          <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?
          <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign In
          </a>
        </p>
          </div>
         
        </div>
      </form>
      <ToastContainer autoClose={2000} />
    </div>

  </div>
      

            
   
  )
}

export default Register;
