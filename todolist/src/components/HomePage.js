import React,{useEffect,useState} from 'react';
import Form from './Forms/Form';
import Navbar from './navbar'
import Posts from './Posts/Posts';
import {useDispatch} from 'react-redux';
import {getPosts} from '../actions/posts'


const Homepage=()=>{
  const [currentId,setCurrentId]=useState(0);
  const dispatch=useDispatch();
 
  useEffect(()=>{
    dispatch(getPosts());
   },[dispatch]);

  return (
  <>
  <Navbar/>
  <br/>
  <Form currentId={currentId} setCurrentId={setCurrentId}/>
  <br/>
  <Posts setCurrentId={setCurrentId}/>
  
  </>
  );
}

export default Homepage;