import {Server} from 'socket.io'
import express from 'express'
import {createServer} from 'http'

const app = express()
const server = createServer(app)

const io  = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true
    }
})

const users = {}

export const gettReceiverSocketId = (receiverId) => {
    return users[receiverId]
}


io.on('connection',(socket) => { 

    console.log("A user connected",socket.id);

    const {userId} = socket.handshake.query

    if(userId){
        users[userId] = socket.id
        console.log("users",users);
    }
    io.emit("getOnlineUsers",Object.keys(users))

    socket.on("disconnect",() => {
        console.log("a user disconnected",socket.id);
        delete users[userId]
    io.emit("getOnlineUsers",Object.keys(users))

        
    })
    

})


export {app,server,io}