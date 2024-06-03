import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import url from "../url.js";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState();
  const [newpassword, setPassword] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const mail = location.state?.email;
    console.log(mail);
    setEmail(mail);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(url + "/password-change", { email, otp, newpassword })
      .then((result) => {
        // console.log(result.data);

        if (result.data.success) {
          toast.success(result.data.data);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
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
            <h1 className="font-bold mt-3 text-2xl">Password Change</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                className="border hover:cursor-not-allowed bg-blue-100 text-black/50 border-[#3f3f46]/50 p-2 focus:border-blue-600 shadow-md rounded-lg focus:outline-none w-full py-1.5"
                type="email"
                required
                defaultValue={email}
                placeholder="Email id"
              />
            </div>
            <div>
              <input
                type="text"
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
                className="border border-[#3f3f46]/50 p-2 shadow-md rounded-lg focus:outline-none focus:border-blue-600 w-full py-1.5"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                required
                className="border my-5  border-[#3f3f46]/50 p-2 shadow-md rounded-lg focus:outline-none focus:border-blue-600 w-full py-1.5"
              />
            </div>
            <button
              type="submit"
              className="w-3/4 ml-8 mb-5 bg-blue-600 shadow-md text-white px-4 py-2 rounded-full"
            >
              Change Password
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
        transition={Bounce}
      />
    </>
  );
}

export default ForgotPassword;
