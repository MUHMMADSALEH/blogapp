import { useState, useEffect } from "react";
import axios from "axios";
import { useParams ,useNavigate} from "react-router-dom";
import {useContext }from "react"
import { Context } from "../contexts/Context";
const Blog = () => {
  const [blog, setBlog] = useState({});
const {dispatch}=useContext(Context)
const navigate=useNavigate()
  const { id } = useParams()
  console.log("id  :", id)

  const handleDelete=async (e)=>{

    e.preventDefault()
    try {
await axios.delete(`/api/blog/${id}`)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  
  const handleUpdate=async (e)=>{

    e.preventDefault()
    try {
const res=await axios.update(`/api/blog/${id}`)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(`/api/blog/${id}`);
      if (res.data?.status) {
        setBlog(res.data.blogs);
      }
    }
    fetchBlogs();
  }, [id])
  console.log("blog  :",blog)
  return (
    <div className="px-10 flex flex-col gap-10  py-5 rounded-md">
      
      <div className="flex flex-col gap-5 ">
        <h1 className="font-extrabold text-2xl">{blog?.title}</h1>
        <p className="font-extralight">{blog?.content}</p>
      <div className="flex gap-2"> <button onClick={handleDelete}  className="text-gray-950 py-0.5 font-semibold px-1 bg-red-500 border border-gray-500 rounded-md">Delete</button>
        <button className="text-gray-950 py-0.5 font-semibold px-1 bg-green-700 border-gray-500 rounded-md">Update</button></div>

      </div>




    </div>
  )
}

export default Blog
