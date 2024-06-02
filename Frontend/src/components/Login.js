import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer.js";
import url from "../url.js";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(url + "/login", { email, password })
      .then((result) => {

        console.log(result.data)

        if(result.data.access){
          toast.success(result.data.data);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }else{
          toast.error(result.data.data);
        }

        // if (result.data === "Success") {
        //   // login succ
        //   setNotify("Sign Successful");
        //   navigate("/dashboard");
        // } else if (result.data === "Pass wrong") {
        //   // wrong pass
        //   setNotify("Incorrect Password");
        // } else {
        //   // no user
          // setNotify("No user found please signup");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex items-center justify-center bg-[#d4d4d8] h-screen">
        <div className="w-full max-w-md mx-auto shadow-xl rounded-lg pl-20 pr-20 bg-white">
          <div className="mb-3 mt-10">
            <h1 className="font-bold mt-3 text-2xl">Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                className="border border-[#3f3f46]/50 p-2 focus:border-blue-600 shadow-md rounded-lg focus:outline-none w-full py-1.5"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email id"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="border border-[#3f3f46]/50 p-2 shadow-md rounded-lg focus:outline-none focus:border-blue-600 w-full py-1.5"
              />
            </div>
            <div className="mb-5">
            </div>
            <button
              type="submit"
              className="w-3/4 ml-8 bg-blue-600 shadow-md text-white px-4 py-2 rounded-full"
            >
              Login
            </button>
            <h1 className="mt-2 mb-5  text-[#a1a1aa] "> Don't have an account ? </h1>
          </form>
          <Link to="/register">
            <button
              type="submit"
              className="w-3/4 ml-8 mb-3 border-2 border-blue-600 bg-white text-[#09090b] px-4 py-1.5 rounded-full"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition= {Bounce}
      />
    </>
  );
}

export default Login;
