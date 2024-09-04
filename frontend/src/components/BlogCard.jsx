
const BlogCard = () => {
  return (
    <div className='flex  gap-6'>
      <img src="https://cdn.pixabay.com/photo/2023/10/10/15/37/motorcycle-8306765_960_720.jpg" alt="image" className='w-72 max-h-64'/>
      <div className='flex flex-col gap-5'>
       <h1 className='font-semibold text-xl'>This is About the bike</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus velit veniam libero? At aut quasi neque, accusamus provident harum cumque ea aliquid itaque aperiam, explicabo odit minus est, veniam asperiores.</p>
      </div>
    </div>
  )
}

export default BlogCard
