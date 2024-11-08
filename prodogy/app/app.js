import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import dbConnect from '../config/dbConnect.js';
import userRoute from '../routes/userRoutes.js';
import { globalErrHandler, notFound } from '../middlewares/globalErrorHandler.js';
dotenv.config()

dbConnect();

const app =express();
//pass incoming data
app.use(express.json());
//cors  module
app.use(cors());
//routes 
app.use("/",userRoute);
//err middleware
app.use(notFound);

app.use(globalErrHandler);

export default app;
