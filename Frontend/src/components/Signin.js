import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom"


function Signin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [notify, setNotify] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:8000/signin', {email, password})
        .then(result => {

            if(result.data === "Success"){
                // login succ
                setNotify('Sign Successful')
                navigate('/home');
            }
            else if(result.data === "Pass wrong"){
                // wrong pass
                setNotify('Incorrect Password')
            }
            else{
                // no user
                setNotify('No user found please signup')
            }
        })
        .catch(err => console.log(err))
    }
    
  return (
    <div className='flex items-center justify-center bg-[#d4d4d8] h-screen'>
    <div className='w-full max-w-md mx-auto shadow-xl rounded-lg pl-20 pr-20 bg-white'>
    <div className='mb-3 ml-24'>
      <h1 className='font-bold mt-3 text-2xl'>Sign In</h1>
    </div>
    <form  onSubmit={handleSubmit}>
      <div className='mb-5'>
        <input 
        className='border border-[#3f3f46]/50 p-2 focus:border-blue-600 shadow-md rounded-lg focus:outline-none w-full py-1.5'
        type="email" 
        required
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email id" />
      </div>
      <div>
        <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        required
        className='border border-[#3f3f46]/50 p-2 shadow-md rounded-lg focus:outline-none focus:border-blue-600 w-full py-1.5' />
      </div>
      <div className='mb-5'>
        <h4 className='text-[#ef4444]/70'>{notify}</h4>
      </div>
      <button
      type='submit' 
      className='w-3/4 ml-8 bg-blue-600 shadow-md text-white px-4 py-2 rounded-full'>Sign In
      </button>
      <h1 className='mt-2 mb-2 ml-24 text-[#a1a1aa] '>
        ---- or ---- 
      </h1>
      </form>
      <Link to="/signup">
      <button
      type='submit' 
      className='w-3/4 ml-8 mb-3 border-2 border-blue-600 bg-white text-[#09090b] px-4 py-1.5 rounded-full'>Sign Up
      </button>
      </Link>
    </div>
  </div>
  )
}

export default Signin
