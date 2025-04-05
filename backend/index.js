import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import courseRoute from './routes/courseRoute.js'
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';
import userRoute from './routes/userRoute.js'
import adminRoute from './routes/adminRoute.js'
import orderRoute from './routes/orderRoute.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
dotenv.config();
const port= 3000;

const DB_URI=process.env.MONGODB_URI;

//middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["ContenSt-Type", "Authorization"],
}))

app.use(
  fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
  })
)


try{
 await mongoose.connect(DB_URI);
  console.log("Connected to MongoDB");

}catch(error){
console.log(error);
}

//defining courseRoute 
app.use('/api/v1/course',courseRoute);
app.use('/api/v1/user',userRoute);
app.use('/api/v1/admin',adminRoute);
app.use('/api/v1/order',orderRoute);

// cloudinary Configuration
cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.api_key, 
  api_secret: process.env.api_secret, 
});
  app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})