import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app= express();
import userRoutes from './routers/users.js';
import videoRouts from './routers/videos.js';
import commentRoutes from './routers/comments.js';
import authRoutes from './routers/auth.js';
import cookieParser from 'cookie-parser';
dotenv.config();

//Connection to mongodb
const connect = ()  =>{
    mongoose.connect(process.env.MONGO).
    then(() => {console.log("Good");})
    .catch= (error) => {
        console.log(error);
    };

}

app.use(cookieParser());
app.use('/api/users' , userRoutes);
app.use('/api/videos' , videoRouts);
app.use('/api/comments' , commentRoutes);
app.use('/api/auth',authRoutes);

app.listen(8000,() => {
    console.log("Connected Good ! ");
     connect();   
})