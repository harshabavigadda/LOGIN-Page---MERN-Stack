import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import url from "../url.js";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url + "/dashboard")
    .then((res) => {
        console.log(res);
    }).catch((err) => {
      console.error(err)
    })
  },[])

  const handleClick = (event) => {
    event.preventDefault()

    axios.post(url + "/dashboard", {message: "Logout"})
    .then((result) => {
      console.log(result);
      if(result.data.success){
        navigate('/login');
      }else{
        alert(result.data.data);
      }
    }).catch((err) => console.log(err));

  }

  return (
    <>
    <div className='bg-blue-600 flex mt-1.5 rounded-full'>
      <h1 className='text-white mt-1 font-bold flex justify-center ml-40'>WELCOME TO DASHBOARD</h1>
      <button
      type='submit'
      onClick={handleClick}
      className='ml-auto mr-16 mt-1 bg-white mb-1.5 flex font-bold justify-center shadow-2xl text-black/65 px-4 py-0.8 rounded-full'>
        Logout
      </button>
    </div>
    <div className='h-screen bg-white'></div>
    </>
  )
}

export default Dashboard;
