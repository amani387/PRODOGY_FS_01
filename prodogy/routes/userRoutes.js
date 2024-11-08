import express from 'express'
import { getUserProfile, loginUserCtrl, regesterUserCtrl } from '../controllers/Users.js'
import { isLoggedIn } from '../middlewares/isLoggedIn.js';


const userRoute =express.Router();
userRoute.post("/api/v1/users/regester",regesterUserCtrl);
userRoute.post("/api/v1/users/login",loginUserCtrl);
userRoute.get("/api/v1/users/profile",isLoggedIn,getUserProfile);

export default userRoute;

