import { Link } from "react-router-dom"
import BlogCard from "../components/BlogCard"
import { useEffect, useState } from "react"
import axios from "axios";

const Home = () => {
 
  const [blogs,setBlogs]=useState([]);
  useEffect(()=>{
    const fetchBlogs=async()=>{
      const res=await axios.get("/api/blog");
      if(res.data?.status){
        setBlogs(res.data.blogs);
      }
    }
    fetchBlogs();
  },[])
  // console.log("blogs  home:",blogs)
  return (
    <div className="px-10 flex flex-col gap-5">
     { 
     blogs && blogs.map((blog)=>{
      return <Link to={blog._id} key={blog._id}> 
            <BlogCard blog={blog}/>
            </Link>
     })
      
      
      }
    </div>
  )
}

export default Home
