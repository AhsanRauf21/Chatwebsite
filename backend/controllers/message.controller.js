import ConversationModal from "../schema/conversation.schema.js"
import MessageModel from "../schema/message.schema.js"
import { gettReceiverSocketId, io } from "../Socketio/server.js"

const sendMessage = async (req,res) => {
    
    try {

        const {message} = req.body
        const senderId = req.user._id
        const {id: receiverId} = req.params

        let conversation =  await ConversationModal.findOne({
            members:{$all:[senderId,receiverId]}
        })
        
    if(!conversation) {
         conversation = await ConversationModal.create({
            members:[senderId,receiverId]
        })    }

        const newMessage = new MessageModel({
senderId,receiverId,message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id) 
 
        }

await Promise.all([conversation.save(),newMessage.save()])

const receiverSocketId = gettReceiverSocketId(receiverId)
if(receiverSocketId){
    io.to(receiverSocketId).emit("newMessage",newMessage)
}

        res.status(200).send(newMessage)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
    
}


const getMessage = async (req,res) => {
    try {

        const senderId = req.user._id
        const {id: receiverId} = req.params

        let conversation = await ConversationModal.findOne({
            members:{$all:[senderId,receiverId]}
        }).populate("messages")
      if (!conversation) return res.status(201).json([])  

        const messages = conversation.messages
        res.status(200).send(messages)

    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export {sendMessage,getMessage}


