import React from 'react'
import { useMainContext } from '../../context/maincontext';
import UserProfile from './UserProfile';
import Messages from './Messages';
import TypeSend from './TypeSend';

const RightHome = () => {

  return (
//     <div className='w-[70%] bg-gray-500'>
// <UserProfile/>
// <Messages/>
// <TypeSend/>
//     </div>

    <div className='w-full md:w-[60%] lg:w-[70%] bg-gray-500 min-h-screen'>
      <UserProfile/>
      <Messages/>
      <TypeSend/>
    </div>
  )
}

export default RightHome