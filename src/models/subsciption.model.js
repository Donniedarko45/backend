import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId, //subscriber like me
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId,  //like yt channels
        ref:"User"
    }
},{timestamps:true})

export const Subscription = mongoose.model("Subscription",subscriptionSchema)