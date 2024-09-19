
import { createBrowserRouter, Navigate,Outlet,RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import  Signin  from "./pages/Signin"
import Signup from "./pages/Signup"
import CreateBlog from "./pages/CreateBlog"
import { Context } from "./contexts/Context"
import { useContext } from "react"

const Layout=()=>{
  return (
    <div className="flex flex-col gap-8 ">
      <Header/>
       <Outlet/>
    </div>
  )
}
const App = () => {
  const {user}=useContext(Context)

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:user?<Home/>:<Signin/>
        },
        {
          path:"/:id",
          element:user?<Blog/>:<Signin/>
        },
        {
         path:"/create",
         element:user?<CreateBlog/>:<Signin/>
        }
      ]
    },
    {
      path:"/signin",
      element:<Signin/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
  ])
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
