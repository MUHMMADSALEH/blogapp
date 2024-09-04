import { Link } from "react-router-dom"

const Signin = () => {
  return (
<div className="min-h-screen flex items-center justify-center flex-col gap-5  ">
        <h1 className="text-2xl font-bold">Sign IN</h1>
     <div className="flex w-[400px] flex-col gap-4 justify-center items-center p-10 bg-green-500 rounded">
        <input type="text" placeholder="Enter Username..." className="p-3 rounded w-full" />
        <input type="text" placeholder="Enter Password..." className="p-3 rounded w-full" />
        <button className="bg-white text-black px-5 py-2 rounded">SignIn</button>
        <span> Don't have account? <Link to={"/signup"}>SignUp</Link> </span>
     </div>
    </div>
  )
}

export default Signin
