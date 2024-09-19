import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react"
import { Context } from "../contexts/Context";
const Blog = () => {
  const [blog, setBlog] = useState({});
  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")
  const [updateMode, setUpdateMode] = useState(false)
  const { dispatch } = useContext(Context)
  const navigate = useNavigate()
  const { id } = useParams()
  // console.log("id  :", id)


  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(`/api/blog/${id}`);
      if (res.data?.status) {
        setBlog(res.data.blogs);
        setContent(res.data.blogs.content)
        setTitle(res.data.blogs.title)
      }
    }
    fetchBlogs();
  }, [id])

  const handleDelete = async (e) => {

    e.preventDefault()
    try {
      await axios.delete(`/api/blog/${blog._id}`)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handelUpdate=async(e)=>{
    console.log("hi fron delete")
e.preventDefault()
try {
  const res=await axios.put(`/api/blog/${blog._id}`,{
    title,
    content
  })
 if(res.data.status){
  setUpdateMode(false)
  setContent(res.data.blog.content)
  setTitle(res.data.blog.title)
 }
} catch (error) {
  console.log(error)
}
  }


  console.log("blog  :", blog._id)
  console.log("blog  :", title)
  console.log("blog  :", content)
  console.log(updateMode)
  return (
    <div className="px-10 flex flex-col gap-10  py-5 rounded-md">

      <div className="flex flex-col gap-5">
        {
          updateMode ? (<input onChange={(e) => setTitle(e.target.value)} type="textarea" className="font-extrabold text-2xl outline-none border-b" value={title} />) : (<h1 className="font-extrabold text-2xl">{title}
            <div className="flex justify-end gap-2">
              <i
                className="singlePostIcon far fa-edit text-green-500"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singlePostIcon far fa-trash-alt text-red-500`"
                onClick={handleDelete}
              ></i>
            </div>

          </h1>)
        }

        {
          updateMode ? (<textarea type="textarea" onChange={(e) => setContent(e.target.value)} value={content} className="font-extralight  " ></textarea>) : (<p className="font-extralight">{content}</p>)

        }
        <div className="flex gap-2">
          {
            updateMode && <button  onClick={handelUpdate} className="text-gray-950 py-0.5 font-semibold px-1 bg-green-700 border-gray-500 rounded-md">Update</button>

          }

        </div>

      </div>




    </div>
  )
}

export default Blog
