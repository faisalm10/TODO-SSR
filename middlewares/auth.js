import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const auth=async (req,res,next)=>{
 try {
    let token=req.cookies?.jwt
    // let token=req?.headers?.authorization?.split(" ")[1]
    if(!token){
        return res.json({
            message:"no token available"
        })
    }
    let decodedToken=await jwt.verify(token,process.env.SECRET_STRING)
    let user=await User.findById(decodedToken.id);
    req.user=user;
    next()
 } catch (error) {
    res.status(400).json({
        status:"fail",
        message:error.message
    })
 }
}