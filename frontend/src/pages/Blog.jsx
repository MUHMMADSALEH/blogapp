import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Blog = () => {
  const [blog,setBlog]=useState({});
  
  

  useEffect(()=>{
    const fetchBlogs=async()=>{
      const res=await axios.get(`/api/blog`);
      if(res.data?.status){
        setBlog(res.data.blogs);
      }
    }
    fetchBlogs();
  },[])
  return (
    <div className="px-10 flex flex-col gap-10">
          <img src="https://cdn.pixabay.com/photo/2023/10/10/15/37/motorcycle-8306765_960_720.jpg" alt="image" className="w-screen h-80 object-cover"/>
          <div className="flex flex-col gap-5">
            <h1 className="font-extrabold text-2xl">{blog?.title}</h1>
             <p className="font-extralight">{blog?.content}</p>
          </div>
    </div>
  )
}

export default Blog
