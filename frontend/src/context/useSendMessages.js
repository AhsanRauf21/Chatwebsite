import React, { useState } from 'react'
import useConversation from '../zustand/useConversation.js'
import { axiosClient } from '../utils/axiosClient'

const useSendMessages =  () => {
    const [loading,setLoading] = useState(false)
    const {setMessages,messages,selectedConvo} = useConversation()

    const sendMessages = async (message)=> {

        try {
            setLoading(true)
            const res = await axiosClient.post(`/send-message/${selectedConvo._id}`,{message},{withCredentials:true})

            setMessages([...messages,res.data])

        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false)
        }

    }



  return {loading,sendMessages}
}

export default useSendMessages