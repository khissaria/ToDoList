import React from 'react';
import {useSelector} from 'react-redux';

import Post from './Post/post';

const Posts=({setCurrentId})=>{
    const posts = useSelector((state) => state.posts);
    
    // const posts=[{
    // title: 'Walking',
    // startDate:'24/04/2021',
    // Status:'In Progress',
    // priority:'High'  },]
    return (
      <div className="mt-6 sm:mt-5 sm:px-12 lg:px-20">

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Task Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Priority
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {posts.map((post)=>(
                        <Post post={post} key={post._id} setCurrentId={setCurrentId}/>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
      )
}

export default Posts;
