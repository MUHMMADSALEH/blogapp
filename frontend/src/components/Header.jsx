import { Link } from "react-router-dom"
import User from "./User"
import { useContext, useEffect, useState } from "react"
import AuthContext,{ UserContexts } from "../contexts/AuthContext"
import axios from "axios"


const Header = () => {

  const {user,Logout,setUser}=useContext(UserContexts);
  // console.log("User context: ",user)
  // console.log("logout",Logout)
  // console.log("setUser",setUser)
  // console.log("AuthContext",AuthContext)

  
  return (
    <div className='min-h-10 bg-blue-600 text-white px-10 py-5 flex justify-between'>
      <span className="text-2xl font-extrabold">Blog Application</span>
      <div className="flex gap-3 items-center">
       <Link to={"/create"} className="font-bold">Add Blog</Link>
      <button  onClick={Logout} className="bg-white text-blue-600 rounded p-2">{ user?.username?"Log Out":"Log in"}</button>
      <User/>
      </div>
    </div>
  )
}

export default Header
