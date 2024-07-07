import mongoose from "mongoose"
import userModel from "./userModel.js"

const messageSchema = mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userModel",
        required:true
    },  receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userModel",
        required:true
    },  message:{
        type:String,
        required:true
    }
},{timestamps:true})

const messageModel = mongoose.model("message",messageSchema)

export default messageModel