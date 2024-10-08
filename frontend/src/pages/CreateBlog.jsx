import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [formData,setFormData]=useState({title:"",content:""});
  const[error,setError]=useState(false)
  const[errMessage,setErrMessage]=useState("")
  const navigate=useNavigate();
  const handleClick=async(e)=>{
    e.preventDefault();
    if([formData.title,formData.content].some((field)=>field==="")){
      setError(true)
      setErrMessage("All fields are required")
      setTimeout(()=>{
        setError(false)
      },2000)
    }
    else{
      const res=await axios.post("/api/blog",formData);
    if(res.data.status){
       navigate("/");
    }
    }
  }
  return (
    <div className="flex flex-col gap-10 items-center justify-center ">
      <h1 className="font-bold text-2xl"> Create A New Blog!</h1>
      {
        error &&<p className="text-red-500">{errMessage}</p>
      }
      <div className="flex flex-col gap-5 w-[500px] bg-green-500 text-black items-center justify-center p-10 rounded">
        <input onChange={(e)=>setFormData({...formData,title:e.target.value})} type="text" placeholder="Enter the title...." className="p-3 rounded w-full" />
        <textarea onChange={(e)=>setFormData({...formData,content:e.target.value})} placeholder="Write the content...." className="p-3 w-full"></textarea>
        <button onClick={handleClick} className="p-3 w-full rounded bg-white active:bg-gray-50">Create</button>
      </div>
    </div>
  )
}

export default CreateBlog
