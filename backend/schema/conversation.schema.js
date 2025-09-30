import mongoose from "mongoose";
import UserModel from "./user.schema.js";
import MessageMModel from "./message.schema.js";

const conversationSchema = new mongoose.Schema({

    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:UserModel
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:MessageMModel,
            default:[]
        }
    ]


},{timestamps:true})


const ConversationModal = mongoose.model('conversation',conversationSchema)
export default ConversationModal