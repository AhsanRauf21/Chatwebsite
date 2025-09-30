import React, { useEffect } from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const UserMessages = ({ data ,selectedUser }) => {
  const { selectedConvo, setSelectedConvo } = useConversation();

  const isSelected = selectedConvo?._id === data._id;
const {onlineUsers} = useSocketContext()

const isOnline = onlineUsers.includes(data._id)

  return (

    <>
    
    <div onClick={selectedUser}>

    <div
      className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-md cursor-pointer ${
        isSelected ? "bg-red-800 hover:bg-red-800" : ""
      } `}
      onClick={() => setSelectedConvo(data)}
    >
      <div className={`avatar avatar-${isOnline?'online':'offline'}`} >
        <div className="w-12 rounded-full">
          <img
            src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
            alt="user"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-medium">{data?.username}</span>
        <span className="text-sm text-gray-400 truncate w-[150px]">
          {data?.email}
        </span>
      </div>
    </div>
        </div>
      </>
  );
};

export default UserMessages;
