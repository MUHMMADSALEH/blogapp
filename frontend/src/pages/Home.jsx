import { Link } from "react-router-dom"
import BlogCard from "../components/BlogCard"

const Home = () => {
  return (
    <div className="px-10">
      <Link to={"/1"}> 
      <BlogCard/>
      </Link>
    </div>
  )
}

export default Home
