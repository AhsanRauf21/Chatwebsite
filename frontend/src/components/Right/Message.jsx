import React from 'react'

const Message = ({message}) => {

  const loggedInUser= JSON.parse(localStorage.getItem("user"))

const sender = message.senderId === loggedInUser.id

const chatPosition = sender ? 'chat-end' : 'chat-start'
const chatColor = sender ? 'chat-bubble-primary' : 'chat-bubble-accent'

const createdAt = new Date(message.createdAt)

const formated = createdAt.toLocaleTimeString([],{
  hour:'2-digit',
  minute:'2-digit'
})

  return (
    <div>
        
<div className={`chat ${chatPosition}`}>
  <div className={`chat-bubble ${chatColor} `}>{ message?.message}</div>
  <p className='chat-footer'>{formated}</p>
</div>


    </div>
  )
}

export default Message