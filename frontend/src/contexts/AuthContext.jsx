import { createContext, useState } from "react"


export const UserContexts=  createContext();

const AuthContext = ({children}) => {
  
    const [user,setUser]=useState({_id:"",name:"",username:""})
    const Logout=()=>{
        setUser({_id:"",name:"",username:""});
       
    }
  return (
   <UserContexts.Provider  value={{user,setUser,Logout}}>
{children}
   </UserContexts.Provider>
  )
}

export default AuthContext
