
const BlogCard = ({blog}) => {
  // console.log("Single blog  :",blog)
  return (
    <div className='flex gap-6 bg-green-500/60 py-1 px-2 rounded-md'>

      <div className='flex flex-col gap-5'>
       <h1 className='font-semibold text-xl'>{blog.title}</h1>
       <p>{blog.content}</p>
      </div>
      
    </div>
  )
}

export default BlogCard
