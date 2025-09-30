import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContext'
import useConversation from '../zustand/useConversation.js'
import sound from '../assets/notify.mp3'


const SocketMessages = () => {

const {socket} = useSocketContext()
const {messages,setMessages}  = useConversation()
const audio = new Audio(sound)

useEffect(()=>{
    socket.on("newMessage",(newMessage)=>{
        setMessages([...messages,newMessage])
  audio.play()

    })
    return () => socket.off("newMessage")
},[socket,messages,setMessages])

}
export default SocketMessages