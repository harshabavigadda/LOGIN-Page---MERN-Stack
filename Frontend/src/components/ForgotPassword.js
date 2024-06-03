import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import url from "../url.js";

function ForgotPassword() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(url + "/forgot-password", { email})
      .then((result) => {

        // console.log(result.data)
        if(result.data.success){
          toast.success(result.data.data);
          setTimeout(() => {
            navigate("/password-change", {state : {email}});
          }, 2000);
        }else{
          toast.error(result.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex items-center justify-center bg-[#d4d4d8] h-screen">
        <div className="w-full max-w-md mx-auto shadow-xl rounded-lg pl-20 pr-20 bg-white">
          <div className="mb-3 mt-10">
            <h1 className="font-bold mt-3 mb-5 text-2xl">Forgot Password</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
            <label className="ml-1">E-mail <span className="text-red-600 font-semibold text-lg">*</span></label>
              <input
                className="border border-[#3f3f46]/50 p-2 focus:border-blue-600 shadow-md rounded-lg focus:outline-none w-full py-1.5"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email id"
              />
            </div>
            <div className="mb-5">
            </div>
            <button
              type="submit"
              className="w-3/4 ml-8 mb-5 bg-blue-600 shadow-md text-white px-4 py-2 rounded-full"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
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

export default ForgotPassword;
