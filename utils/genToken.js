import jwt from 'jsonwebtoken';

export const genToken=async(id)=>{
    return await jwt.sign({id},process.env.SECRET_STRING,{
        expiresIn:24*60*60
    })
}