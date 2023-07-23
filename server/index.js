import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRoute from './routes/postRoute.js';
import dotenv from 'dotenv';
 
const app = express();
dotenv.config();

 const mongoURL = 'mongodb+srv://harshitjoshi250:Harshit123@cluster0.vbmgqwz.mongodb.net/?retryWrites=true&w=majority'; 
 app.use(bodyParser.json({limit: "30mb", extended: true}));
 app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
    app.use(cors());

    app.use('/api/post', postsRoute); 
 mongoose.connect(process.env.CONNECION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log('Database connected');
 }).catch((error)=>{
     console.log(error.message);
     });

 app.listen(process.env.PORT, ()=>{
     console.log('Server running on port 5000');
 })