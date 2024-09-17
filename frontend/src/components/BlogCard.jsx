
const BlogCard = ({blog}) => {
  // console.log("Single blog  :",blog)
  return (
    <div className='flex gap-6'>
      <img src="https://cdn.pixabay.com/photo/2023/10/10/15/37/motorcycle-8306765_960_720.jpg" alt="image" className='w-72 max-h-64'/>
      <div className='flex flex-col gap-5'>
       <h1 className='font-semibold text-xl'>{blog.title}</h1>
       <p>{blog.content}</p>
      </div>
      <div>
        <button>Delete</button>
        <button>Update</button>
      </div>
    </div>
  )
}

export default BlogCard
