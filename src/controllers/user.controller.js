import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser=asyncHandler(async(req,res)=>{
/*  get user details from frontend
    validation-not empty
    check if user already exists=>we can check it by email or username 
    check for images,check for avatar
    upload them to cloudinary,avatar
    create user object =>create entry in db
    remove password and referesh token field from response
    check for user creation
    return response
*/
})

export {registerUser,}