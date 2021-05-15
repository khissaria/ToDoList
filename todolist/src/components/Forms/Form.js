import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { createPost,editPost } from '../../actions/posts';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Form=({currentId,setCurrentId})=>{


 
  const [postData,setPostData]=useState({
    title:'',
    priority:'High',
    startDate:'',
    status:'To Do'

  });
 
  const post = useSelector((state)=>(currentId !== undefined ?state.posts.find(message=>(message._id === currentId)):null)); 
 
  
  const dispatch=useDispatch();
 
  useEffect(()=>{ 
   if(post)
        setPostData(post);
    },[post]);
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(currentId===0)
    {
      dispatch(createPost(postData));
      clear();
    }
    else{
      dispatch(editPost(currentId,postData));
      clear();
    }

    
    
  }

  const clear = () =>{
    setCurrentId(0);
    setPostData({ 
    title:'',
    priority:'High',
    startDate:new Date(),
    status:'To Do'});
  }

    return <div className="mt-6 sm:mt-5 sm:px-12 lg:px-20">
     
    <div className="md:grid md:grid-cols-2 md:gap-6">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={handleSubmit} method="POST"  >
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="task_name" className="block text-sm font-medium text-gray-700">
                    Task name
                  </label>
                  <input
                    type="text"
                    name="task_name"
                    required
                    value={postData.title}
                    id="task_name"
                    onChange={(e) => setPostData({...postData,title:e.target.value})}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>


                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    name="start_date"
                    required
                    value={postData.startDate}
                    onChange={(e) => setPostData({...postData,startDate:e.target.value})}
                    id="start_date"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <select
                    id="priority" 
                    name="priority"
                    required
                    value={postData.priority}
                    onChange={(e) => setPostData({...postData,priority:e.target.value})}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    id="status"
                    value={postData.status}
                    name="status"
                    required
                    onChange={(e) => setPostData({...postData,status:e.target.value})}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Done</option>
                    <option>Cancelled</option>
                  </select>
                </div>
               
              </div>
            </div>
            <div className="sm:flex sm:justify-center lg:justify-end">
            <div className="px-2 py-3   sm:px-3">
              <button
                type="reset"
                onClick={clear}
                className="w-full flex items-center justify-center inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Clear
              </button>
             
            </div>
            <div className="px-2 py-3 rounded-md  text-right sm:px-3">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
             
            </div>
            </div>
          </div>
        </form>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
    
  </div>
}

export default Form;