import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

const Signup = () => {
  const [formData,setFormData]=useState({name:"",username:"",password:""});
  const navigate=useNavigate();

  const hanleclick=async(e)=>{
    e.preventDefault();
    const res=await axios.post("http://localhost:3000/api/auth/signup",formData);
    if(res.data.status){
      navigate("/signin")
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-5  ">
        <h1 className="text-2xl font-bold">Sign UP</h1>
     <div className="flex w-[400px] flex-col gap-4 justify-center items-center p-10 bg-green-500 rounded">
        <input onChange={(e)=>setFormData({...formData,name:e.target.value})} type="text" placeholder="Enter Full Name..." className="p-3 rounded w-full" />
        <input onChange={(e)=>setFormData({...formData,username:e.target.value})} type="text" placeholder="Enter Username..." className="p-3 rounded w-full" />
        <input onChange={(e)=>setFormData({...formData,password:e.target.value})} type="text" placeholder="Enter password..." className="p-3 rounded w-full" />
        <button onClick={hanleclick} className="bg-white text-black px-5 py-2 rounded">SignUp</button>
        <span>Already have account? <Link to={"/signin"}>SingIn</Link> </span>
     </div>
    </div>
  )
}

export default Signup
