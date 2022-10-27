import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import loginImg from '../assets/trees.jpg'
import { Link } from 'react-router-dom'

export default function Signup1() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    
    <div className='flex justify-center items-center h-full'>
    <div className='bg-white px-4 py-2 rounded-md w-[350px] md:w-[400px]'>
        <h2 className='text-4xl font-bold text-center pt-4'>LPG</h2>
            <div className='flex justify-between py-5'>
                <p className='border shadow-lg hover:shadow-xl px-4 py-1 relative flex items-center rounded-full'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-4 py-1 relative flex items-center rounded-full'><FcGoogle className='mr-2' /> Google</p>
            </div>
            <div className='flex flex-col mb-2'>
                <label>Email</label>
                <input className='border relative bg-gray-100 p-[4px]' type="text" />
            </div>
            <div className='flex flex-col mb-2'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-[4px]' type="text" />
            </div>
            <div className='flex flex-col mb-2'>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-[4px]' type="password" />
            </div>
            <div className='flex flex-col'>
                <label>Confirm Password</label>
                <input className='border relative bg-gray-100 p-[4px]' type="password" />
            </div>
            <button className='w-full py-2 mt-5 bg-green-600 hover:bg-green-500 relative text-white rounded-full'>Sign Up</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='text-center mt-5'>Already a member?<Link to="login1" smooth={true} duration={500} className='p-2 cursor-pointer hover:text-green-300 underline'>Log In</Link>now</p>
        </div>
    </div>
    </div>
  )
}