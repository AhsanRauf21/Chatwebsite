import React, { createContext, useContext, useEffect, useState } from 'react'
import { useMainContext } from './maincontext'
import { io } from 'socket.io-client'

export const  socketContext = createContext()
export const useSocketContext = () => useContext(socketContext)

export const SocketContext = ({children}) => {
  const [socket,setSocket] = useState(null)

  const [onlineUsers,setOnlineUsers] = useState([])
  const {user} = useMainContext()

useEffect(() => {
    if(user){
        const socket = io("http://localhost:3000",{
            query:{
                userId:user.id
            }
        })
        setSocket(socket)

        socket.on("getOnlineUsers",(users) => {
          setOnlineUsers(users)
        })

          return () => {
        socket.disconnect()
      }
    }
    else {
      if(socket){
        socket.disconnect()
        setSocket(null)
      }
    }
},[user])
  
    return (
        <socketContext.Provider value={{socket,onlineUsers}}  > 
            {children}
        </socketContext.Provider>
  )
}
