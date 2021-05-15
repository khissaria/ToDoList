import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app=express();
dotenv.config();

app.use(bodyParser.json({limit:"2mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"2mb",extended:true}));
app.use(cors());
 
app.use('/posts',postRoutes);
app.use('/users',userRoutes);

const MONGO_URI='mongodb+srv://kaushal_hissaria:Accenture@12345@pvtcluster.t0v7x.mongodb.net/toDoList?retryWrites=true&w=majority'
const PORT = process.env.PORT||5000;

mongoose.connect(MONGO_URI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>app.listen(PORT,()=> console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify',false);