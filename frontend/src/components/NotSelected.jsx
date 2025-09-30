import React from 'react'
import { useMainContext } from '../context/maincontext'

const NotSelected = () => {

    const {user} = useMainContext()
    

  return (

<>
<div className="mockup-window rounded-none w-full md:w-[60%] lg:w-[70%] bg-gray-700">
  <div className="grid place-content-center border-t border-base-300 h-80 text-gray-300 capitalize font-semibold text-2xl">
    <span>
      welcome <span className='font-bold' >{user.username}</span>
    </span>
    <p>
      select a user to chat
    </p>
  </div>
</div>

{/* <div className="mockup-window rounded-none w-[70%] bg-gray-700">
  <div className="grid place-content-center border-t border-base-300 h-80 text-gray-300 capitalize font-semibold text-2xl">
    <span>
    welcome <span className='font-bold' >{user.username}</span>
    </span>
    <p>
    select a user to chat
    </p>
    </div>
</div> */}




    </>


  )
}

export default NotSelected