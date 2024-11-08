import asyncHandler from 'express-async-handler';
import User from '../model/User.js'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js';
import { getTokenFromHeader } from '../utils/getTokenFromHeaders.js';
import { verifyToken } from '../utils/verifyToken.js';

//@desc Regester User
//@route POST /api/v1/users/regester
// private/admin
export const regesterUserCtrl =async (req,res)=>{


    const {fullname,email,password} =req.body;
    //check if user exists 
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" }); // Return 400 status
    }

    //hash password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);


    //create user

    const user =await User.create({
        fullname,email,
        password:hashedPassword

    });
    res.status(201).json({
        status:"success",
        message:"User Regesterd succesfully",
        data:user

    })
}
//@desc Login User 
//@route POST /api/v1/users/login
//@access public

export const loginUserCtrl =asyncHandler(
    async(req,res)=>{
        const {email,password} =req.body;
    
        //find the user by email in the db 
        const userFound =await User.findOne({email});
      if(userFound && await bcrypt.compare(password,userFound?.password)){
    res.status(200).json({
        status:'success',
        msg:"user loged in successfully",
        isAdmin: userFound.isAdmin,  // Send the isAdmin field
        userFound,
        token:generateToken(userFound._id)
    })
      }else{
       throw new Error("Invalid login credentials")
      }
    }
)


//desc GET USER PROFILE
//profile controller 
//route GET /api/v1/users/profile
//access Private


export const getUserProfile =asyncHandler(async (req,res)=>{

const token =getTokenFromHeader(req)
console.log(token)
const verified = verifyToken(token)
console.log(verified)
    res.json({
    msg:"get user pofile api endpoint"
})
})


