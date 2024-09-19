import { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { Context } from "../contexts/Context";

const Signin = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const passwordRef = useRef();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const [errMessage, setErrMessage] = useState("")
  const { error, isFetching, dispatch } = useContext(Context);




  const hanleclick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    if (
      [formData.username, formData.password].some((field) => field?.trim() === "")
    ) {
      setError(true)
      setErrMessage("All fields are required")
      setFormData({ username: "", password: "" })
      setTimeout(() => {
        setError(false)
      }, 2000)
      return
    } else {
      try {
        const res = await axios.post("/api/auth/signin", {
          username: userRef.current.value,
          password: passwordRef.current.value
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    }

  }
  // console.log("formData  :", userRef.current?.value, passwordRef.current?.value)
  // console.log(user)
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-5  ">
      <h1 className="text-2xl font-bold">Sign IN</h1>
      {
        error && <p className="text-red-600">{errMessage}</p>
      }
      <div className="flex w-[400px] flex-col gap-4 justify-center items-center p-10 bg-green-500 rounded">
        <input onChange={(e) => setFormData({ ...formData, username: e.target.value })} type="text" placeholder="Enter Username..." className="p-3 rounded w-full" ref={userRef} />
        <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="text" placeholder="Enter Password..." className="p-3 rounded w-full" ref={passwordRef} />
        <button onClick={hanleclick}  className={`bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 
        ${isFetching ? 'bg-gray-400 opacity-50 cursor-not-allowed' : ''}`}
      disabled={isFetching}>SignIn</button>
        <span> Don't have account? <Link to={"/signup"}>SignUp</Link> </span>
      </div>
    </div>
  )
}

export default Signin
