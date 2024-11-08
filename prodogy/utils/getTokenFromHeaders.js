export const getTokenFromHeader =(req)=>{
    //get token from headers
     const token =req?.headers?.authorization?.split(" ")[1];
    if(token == undefined ){
        return 'no token found in the headers '

    }else {
        return token
    }
}