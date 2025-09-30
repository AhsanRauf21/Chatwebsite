import React, { useContext, useState } from "react";
import Search from "./Search";
import UserMessages from "./UserMessages";
import Logout from "./Logout";
import { useMainContext } from "../../context/maincontext";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../zustand/useConversation.js";

const LeftHome = () => {

const {allUsers} = useMainContext()
const [search,setSearch] = useState('')
const {selectedConvo} = useConversation()

const filterUsers = allUsers.length > 0 ? allUsers.filter((cur,i) => {
   const x = search?.toLowerCase()
   const y = cur.username.trim().toLowerCase()

   return y.includes(x) || y.startsWith(x) || y.endsWith(x) 

}) : []






  return (
    <>
{/*     
    <div className="w-[30%] bg-gray-800 text-white flex flex-col h-screen">
      <div className="p-4 border-b border-gray-700">
     <div className="flex items-center bg-gray-700 rounded-md px-3 py-2">
         <input
           type="search"
           placeholder="Search chats..."
           className=" outline-none w-full text-sm  placeholder-gray-400 border-none"
           value={search}
           onChange={e => setSearch(e.target.value)}
         />
         <CiSearch className="text-gray-400 mr-2 text-lg " />
       </div> 
      </div>

      <div className="flex-1 scrollBar overflow-y-auto  p-2 space-y-4">
      {
        filterUsers.map((user) => {
          return <UserMessages data={user} key={user._id} selectedUser={() => setSearch('')} />
        })

      }
      </div>

      <div className="p-4 border-t border-gray-700">
        <Logout />
      </div>
    </div> */}
    <div className="w-full md:w-[40%] lg:w-[30%] bg-gray-800 text-white flex flex-col h-screen">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center bg-gray-700 rounded-md px-3 py-2">
          <input
            type="search"
            placeholder="Search chats..."
            className="outline-none w-full text-sm placeholder-gray-400 border-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <CiSearch className="text-gray-400 mr-2 text-lg " />
        </div>
      </div>

      <div className="flex-1 scrollBar overflow-y-auto p-2 space-y-4">
        {
          filterUsers.map((user) => {
            return <UserMessages data={user} key={user._id} selectedUser={() => setSearch('')} />
          })
        }
      </div>

      <div className="p-4 border-t border-gray-700">
        <Logout />
      </div>
    </div>
        </>
  );
};

export default LeftHome;
