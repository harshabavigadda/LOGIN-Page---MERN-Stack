import React from 'react'
import logo from '../LinkedIn.png'
import leet from '../LeetCode.png'
import git from '../git.png'

function Footer() {
  return (
    <div className='flex rounded-t-lg bg-gray-600'>
    <h1 className='text-white text-md mt-2 mb-2 font-bold ml-20'>
    © 2024 "Harsha" All rights reserved.
    </h1>
    <a href='https://www.linkedin.com/in/harsha-vardhan-bavigadda-99054721b/' 
    className='ml-auto'>
    <img className='h-5 mr-10 mt-2 mb-2'src={logo} /></a>
    <a href='https://leetcode.com/harsha_47/'>
    <img className='h-6 mr-10 mt-2 mb-2'src={leet} /></a>
    <a href='https://github.com/harshabavigadda'>
    <img className='h-5 mr-24 mt-2 mb-2'src={git} /></a>
  </div>
  )
}

export default Footer
