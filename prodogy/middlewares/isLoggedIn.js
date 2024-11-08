import { getTokenFromHeader } from "../utils/getTokenFromHeaders.js"
import { verifyToken } from "../utils/verifyToken.js"

export const isLoggedIn  =(req,res,next) =>{
    //get token from headr
    const token = getTokenFromHeader(req)
    //verify the token 
    const decodedUser = verifyToken(token)
    //save the user into req obj
    if(!decodedUser){
        throw new Error('Invalid/Expired token login again')
    }else{
        req.userAuhtId =decodedUser?.id;
    next();
    }
    
}