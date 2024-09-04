import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom"
import axios from "axios";
import { UserContexts } from "../contexts/AuthContext";

const Signin = () => {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({username:"",password:""});
  const {setUser}=useContext(UserContexts);
  const hanleclick=async(e)=>{
    e.preventDefault();
    const res=await axios.post("http://localhost:3000/api/auth/signin",formData);
    if(res.data.status){
      setUser(res.data.user);
      navigate("/")
    }
  }
  return (
<div className="min-h-screen flex items-center justify-center flex-col gap-5  ">
        <h1 className="text-2xl font-bold">Sign IN</h1>
     <div className="flex w-[400px] flex-col gap-4 justify-center items-center p-10 bg-green-500 rounded">
        <input onChange={(e)=>setFormData({...formData,username:e.target.value})} type="text" placeholder="Enter Username..." className="p-3 rounded w-full" />
        <input onChange={(e)=>setFormData({...formData,password:e.target.value})} type="text" placeholder="Enter Password..." className="p-3 rounded w-full" />
        <button onClick={hanleclick} className="bg-white text-black px-5 py-2 rounded">SignIn</button>
        <span> Don't have account? <Link to={"/signup"}>SignUp</Link> </span>
     </div>
    </div>
  )
}

export default Signin
