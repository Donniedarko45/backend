import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import jwt from "jsonwebtoken"
import {User} from "../models/user.models.js"


export const verifyJWT =asyncHandler(async(req,res,next)=>{
   try {
    const token = req.cookies?.accessToken || req.header("Authorisation")?.replace("Bearer ","")
 
    if(!token){
     throw new ApiError(401,"Unauthorised request")
    }
 
   const decodedToken =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
   console.log(token)
 
   const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
   console.log(user)
 
   if(!user){
     throw new ApiError(401,"Invalid Access Token")
   }
 
   req.user = user; 
  next()
   } catch (error) {
     throw new ApiError(401,error?.message || "Invalid access token")
   }
})