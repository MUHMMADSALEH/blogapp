import { Link } from "react-router-dom"
import User from "./User"
import { useContext } from "react"
import { UserContexts } from "../contexts/AuthContext"


const Header = () => {
  const {user}=useContext(UserContexts);
  console.log("User context: ",user)
  return (
    <div className='min-h-10 bg-blue-600 text-white px-10 py-5 flex justify-between'>
      <span className="text-2xl font-extrabold">Blog Application</span>
      <div className="flex gap-3 items-center">
       <Link to={"/create"} className="font-bold">Add Blog</Link>
      <button className="bg-white text-blue-600 rounded p-2">Logout</button>
      <User/>
      </div>
    </div>
  )
}

export default Header
