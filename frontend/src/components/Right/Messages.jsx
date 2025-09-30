import React, { useEffect, useRef } from 'react'
import useGetMessages from '../../context/useGetMessages.js'
import Message from './Message.jsx'
import SocketMessages from '../../context/SocketMessages.jsx'
import sound from '../../assets/notify.mp3'
const Messages = () => {

const {loading,messages} = useGetMessages()
SocketMessages()
const lastMsg = useRef()
useEffect(()=>{
setTimeout(() => {
  if(lastMsg.current){
    lastMsg.current.scrollIntoView({
      behavior:'smooth'
    })
  }
}, 100);
},[messages])


  return (
      <>


<div className='h-[76vh] p-1 overflow-y-auto'>
{loading?
<div className=' size-full flex justify-center items-center '>


<div className="flex *:bg-gray-400 w-[35%] flex-col gap-4">
  <div className="skeleton  h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div> 
</div>

: messages.length> 0 && messages.map((message) => {

  return <div  key={message._id} ref={lastMsg}>

    <Message message={message} />
  </div>
})

}

{!loading && messages.length===0 && (
  <div className='flex justify-center  items-center h-full'>
    <p className='font-semibold text-gray-300'>Say Hi to start the conversation</p>
    </div>
)}     
    </div>
    </>

  )
}

export default Messages