
import { createBrowserRouter, Navigate,Outlet,RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import  Signin  from "./pages/Signin"
import Signup from "./pages/Signup"
import CreateBlog from "./pages/CreateBlog"
import { UserContexts } from "./contexts/AuthContext"
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
  const {user}=useContext(UserContexts)

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:user?.username?<Home/>:<Signin/>
        },
        {
          path:"/:id",
          element:user?.username?<Blog/>:<Signin/>
        },
        {
         path:"/create",
         element:<CreateBlog/>
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
