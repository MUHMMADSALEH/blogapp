
const CreateBlog = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center ">
      <h1 className="font-bold text-2xl"> Create A New Blog!</h1>
      <div className="flex flex-col gap-5 w-[500px] bg-green-500 text-black items-center justify-center p-10 rounded">
        <input type="text" placeholder="Enter the title...." className="p-3 rounded w-full" />
        <textarea placeholder="Write the content...." className="p-3 w-full"></textarea>
        <button className="p-3 w-full rounded bg-white active:bg-gray-50">Create</button>
      </div>
    </div>
  )
}

export default CreateBlog
