'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex min-h-screen bg-[#141414] text-white">
      {/* Left Side - Slider */}
      <div className="hidden md:flex w-1/2 relative">
        <div className="w-full h-full bg-[#221F1F] flex items-center justify-center">
          {/* Replace with dynamic movie banners */}
          <Image
            src="/movies/banner1.jpg"
            alt="Movie Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#141414] px-6">
        <div className="w-full max-w-md space-y-6">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-[#E50914] text-center">
            vibe<span className="text-[#FFFFFF]">pass</span>
          </h1>

          {/* Login Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 p-3 rounded-md bg-[#221F1F] text-white border border-[#B81D24] focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 p-3 rounded-md bg-[#221F1F] text-white border border-[#B81D24] focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#E50914] hover:bg-[#B81D24] transition font-semibold"
            >
              Log In
            </button>
          </form>

          {/* Links */}
          <div className="flex justify-between text-sm">
            <a href="#" className="text-gray-400 hover:text-[#E50914]">
              Forgot Your Password?
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E50914]">
              First Time Registration
            </a>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 pt-6">
            Vibe Pass HRMS v1.0 <br /> All Rights Reserved ©
          </div>
        </div>
      </div>
    </div>
  )
}
