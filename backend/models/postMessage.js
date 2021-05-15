import mongoose from 'mongoose';

const postSchema=mongoose.Schema({
    title:String,
    startDate:String,
    creator:String,
    priority:String,
    status:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const PostMessage=mongoose.model('toDoList',postSchema);
export default PostMessage;