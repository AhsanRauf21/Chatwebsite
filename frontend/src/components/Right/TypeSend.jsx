import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'
import useSendMessages from '../../context/useSendMessages.js'
import { CgSpinnerAlt } from "react-icons/cg";
const TypeSend = () => {
  const [message,setMessage] = useState('')
const {loading,sendMessages} = useSendMessages()

const handleSubmit = async (e) => {
  e.preventDefault()
  await sendMessages(message)
  setMessage('')
}
    
  return (
    <>
    <hr />
<form onSubmit={handleSubmit}>
  <div className="   p-2">
  <div className="  flex  shadow-md overflow-hidden rounded-lg w-full">
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Type a message..."
      className=" px-4 py-2.5 w-[95%] bg-gray-800 text-gray-400 placeholder-gray-400  outline-none border-none"
      />
   {
    loading? <div className='p-3'>

      <CgSpinnerAlt className='animate-spin  text-white text-xl'/>
    </div>

    :  <button type='submit' className="p-3 bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-r-lg">
      <IoSend className="text-white h-5 w-5" />
    </button>
   }
  </div>
</div>
</form>
      </>

  )
}

export default TypeSend