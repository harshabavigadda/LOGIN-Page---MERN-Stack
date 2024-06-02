import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer.js";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import url from "../url.js";

function Register() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(url + "/register", { userName, email, password })
      .then((result) => {
        console.log(result.data);
        if(result.data.success){
          toast.success("Resitration Sccessfully Done");
          setTimeout(() => {
                navigate("/login");
              }, 2000);
        }else {
          toast.error(result.data.error);
        }
        // if (result.data) {
        //   setTimeout(() => {
        //     navigate("/login");
        //   }, 2000);
        // } else {
        //   // new regis
        //   setTimeout(() => {
        //     navigate("/dashboard");
        //   }, 1000);
        // }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex items-center justify-center bg-[#d4d4d8] h-screen">
        <div className="w-full max-w-md mx-auto shadow-xl rounded-lg pl-20 pr-20 bg-white">
          <div className="mb-3 mt-10">
            <h1 className="font-bold mt-3 text-2xl">User Registration</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                className="border border-[#3f3f46]/50 p-2 focus:border-blue-600 shadow-md rounded-lg focus:outline-none w-full py-1.5"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <input
                className="border border-[#3f3f46]/50 p-2 focus:border-blue-600 shadow-md rounded-lg focus:outline-none w-full py-1.5"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email id"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="border border-[#3f3f46]/50 p-2 focus:border-blue-600 shadow-md rounded-lg focus:outline-none w-full py-1.5"
              />
            </div>
            <button
              type="submit"
              className="w-3/4 mb-2 ml-8 bg-blue-600 shadow-md text-white px-4 py-2 rounded-full"
            >
              Register
            </button>
            <h1 className="mt-2 mb-5  text-[#a1a1aa] "> Already have an account ? </h1>
          </form>
          <Link to="/login">
            <button
              type="submit"
              className="w-3/4 ml-8 mb-3 border-2 border-blue-600 bg-white text-[#09090b] px-4 py-1.5 rounded-full"
            >
              Login
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

export default Register;
