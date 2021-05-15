import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

const Post=({post,setCurrentId})=>{
  let statusDisplay;
  if(post.status==='To Do')
  {
    statusDisplay=<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">{post.status}</span>
  }
  else if(post.status==='In Progress')
  {
    statusDisplay=<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">{post.status}</span>
  }
  else if(post.status==='Done')
  {
    statusDisplay=<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{post.status}</span>
  }
  else if(post.status==='Cancelled')
  {
    statusDisplay=<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">{post.status}</span>
  }
  const dispatch=useDispatch();

    return (
<tr key={post._id}>
<td className="px-6 py-4 whitespace-nowrap">
  <div className="flex items-center">
   
    <div className="ml-4">
      <div className="text-sm font-medium text-gray-900">{post.title}</div>
     
    </div>
  </div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
  <div className="text-sm text-gray-900">{post.startDate.slice(0,10)}</div>
  
</td>
<td className="px-6 py-4 whitespace-nowrap">
  {statusDisplay}
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.priority}</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
  <button onClick={()=> setCurrentId(post._id)} className="text-indigo-600 hover:text-indigo-900"> Edit</button>
  
</td>
</tr>
);
};

export default Post;