import React,{ Fragment, useState,useEffect  } from 'react'
import { Popover, Transition } from '@headlessui/react'
import decode from 'jwt-decode';
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/react/outline'
import { LogoutIcon } from '@heroicons/react/solid'
import {useHistory,useLocation  } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from './../image/logo1.png'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 const Navbar = () => {
  
  const dispatch=useDispatch();
  const location = useLocation();
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  

  const history=useHistory();
  const logout = () =>{
    dispatch({type:'LOGOUT'})
    history.push('/');
  }
  
  
  useEffect(()=>{
    const token=user?.token;
    if(token)
    {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) 
        logout();
      setUser(JSON.parse(localStorage.getItem('profile')));
    }
    else
    {
      history.push('/');
    }
  },[location]);

  const solutions = [
    {
      name: 'Add New Task',
      description: 'Add a new task.',
      href: '/home',
      icon: ViewGridAddIcon,
    }
  ]
  const AuthButtons = [
    {
      name: 'Logout',
      description: 'Logout.',
      
      icon: LogoutIcon,
    }
  ]

  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={logo}
                    alt=""
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                

                <a href="/home" className="text-base font-medium rounded-full text-gray-500 bg-gray-300 hover:text-gray-900 line-height-username1 h-6 pr-5">
                <span className="ml-4 mt-8 text-base font-medium">
                  {user?.profile.userName?user?.profile.userName:user?.profile.name}
                  </span>
                </a>
                
                
            <button className="text-base font-medium text-gray-500 hover:text-gray-900" onClick={logout}>Logout</button>
                
              </Popover.Group>

            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </a>
                      ))}
                      {AuthButtons.map((item) => (
                      <button
                      key={item.name}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" 
                      onClick={logout}
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </button>
                        
                      ))}
                    </nav>
                  </div>
                </div>

              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Navbar;