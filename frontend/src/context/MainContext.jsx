import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { axiosClient } from '../utils/axiosClient'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const mainContext = createContext()
export const useMainContext = () => useContext(mainContext)
export const MainContext = ({children}) => {
  
  const navigate = useNavigate()
    const stateValue  = Cookies.get("jwt") || localStorage.getItem("user")
    const [user,setUser] = useState(stateValue ? JSON.parse(stateValue) : undefined )
    const [allUsers,setAllUsers] = useState([])
    const [loading,setLoading] = useState(false)

    const token = Cookies.get("jwt");

  const logoutUser = async () => {
    try {
      await axiosClient.post("/logout", null, { withCredentials: true });
      localStorage.removeItem("user");
Cookies.remove("jwt")
setUser(null)

navigate('/login')
toast.success("Logout successful")

} catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {

    try {

setLoading(true)

      const res = await axiosClient.get('/all-users',{
        withCredentials:true,
      headers:{
        "jwt":token
      }
      })
      

      setAllUsers(res.data)
      
    } catch (error) {
      console.log('error  ',error);
      
    }finally{
      setLoading(false)
      
    }

  }


useEffect(() => {
fetchUsers()

},[])



  return (
    <mainContext.Provider value={{user,setUser,fetchUsers,allUsers,loading,logoutUser}}>
{children}

    </mainContext.Provider>
  )
}
