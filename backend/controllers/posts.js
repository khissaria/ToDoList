import mongoose  from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts=async(req,resp)=>{
    try{
        const PostMessages=await PostMessage.find({creator:req.userId});
        
        resp.status(200).json(PostMessages);
    }
    catch(err)
    {
        resp.status(404).json({message:err.message});
    }
}

export const createPost=(req,resp)=>{
  
    const post=req.body;
    const newPost=new PostMessage({...post ,creator:req.userId,createdAt:new Date().toISOString()});
    try{
        newPost.save()
       resp.status(201).json(newPost);
    }
    catch(err)
    {
        resp.status(409).json({message:err.message});
    }

}

export const updatePost= async(req,resp)=>{
    const {id} = req.params;
    const post =req.body;
    

    if(!mongoose.Types.ObjectId.isValid(id))
        return resp.status(404).send('No Post with such ID');
    
    const updatedPost=await PostMessage.findByIdAndUpdate(id,post,{new: true});

    resp.json(updatedPost);
}