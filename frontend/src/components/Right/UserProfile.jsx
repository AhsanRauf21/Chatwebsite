import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const UserProfile = () => {
  const { selectedConvo } = useConversation();

  const {onlineUsers} = useSocketContext()

  const onlineStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline"
  }

  return (
    <>
    
        <div className="bg-gray-700 flex items-center gap-4 p-1.5 h-[13vh] justify-center w-full">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-gray-500 ring-offset-2 ring-offset-gray-700">
              <img
                src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                alt="user"
              />
            </div>
          </div>

          <div className="flex flex-col min-w-0">
            <p className="font-medium text-white truncate">
              {selectedConvo?.username}
            </p>
            <span className="text-sm text-gray-300 truncate">
          {
            onlineStatus(selectedConvo._id)
          }
            </span>
          </div>
        </div>
      
    </>
  );
};

export default UserProfile;
