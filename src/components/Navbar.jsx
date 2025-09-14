"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiCalendar,
  FiBook,
  FiUser,
} from "react-icons/fi";
import { BiCameraMovie, BiSolidCameraMovie } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className=" bg-gray-950 text-white fixed w-full z-50 shadow-lg  border-b-1 border-b-stone-700 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left - Logo with Icon */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center space-x-2 group"
            >
              <div className="relative">
                <BiSolidCameraMovie className="text-red-600 text-4xl absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BiCameraMovie className="text-red-500 text-4xl group-hover:opacity-0 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                VibePass
              </span>
            </Link>

            {/* Middle - Links (hidden on mobile) */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="flex items-center hover:text-red-400 transition-colors duration-200"
              >
                <FiHome className="mr-1" /> Home
              </Link>
              <Link
                href="/movies"
                className="flex items-center hover:text-red-400 transition-colors duration-200"
              >
                <RiMovie2Fill className="mr-1" /> Movies
              </Link>
              <Link
                href="/upcoming"
                className="flex items-center hover:text-red-400 transition-colors duration-200"
              >
                <FiCalendar className="mr-1" /> Upcoming
              </Link>
              <Link
                href="/about"
                className="flex items-center hover:text-red-400 transition-colors duration-200"
              >
                <FiInfo className="mr-1" /> About
              </Link>
              <Link
                href="/blog"
                className="flex items-center hover:text-red-400 transition-colors duration-200"
              >
                <FiBook className="mr-1" /> Blog
              </Link>
            </div>

            {/* Right - Auth (hidden on mobile) */}
            <div className="hidden md:flex items-center">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center">
                    <FiUser className="mr-2" /> Login
                  </button>
                </SignInButton>
              </SignedOut>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors duration-200"
              >
                {open ? <FiX size={26} /> : <FiMenu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-900 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-40 shadow-xl flex flex-col`}
        >
          {/* Close Button & Logo */}
          <div className="flex justify-between items-center p-5 border-b border-gray-800 bg-opacity-90">
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              onClick={() => setOpen(false)}
            >
              <div className="relative h-10 w-10">
                <BiSolidCameraMovie className="text-red-600 text-4xl absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BiCameraMovie className="text-red-500 text-4xl group-hover:opacity-0 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                VibePass
              </span>
            </Link>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-200"
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-red-400 rounded-md transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              <FiHome className="mr-3" /> Home
            </Link>
            <Link
              href="/movies"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-red-400 rounded-md transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              <RiMovie2Fill className="mr-3" /> Movies
            </Link>
            <Link
              href="/upcoming"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-red-400 rounded-md transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              <FiCalendar className="mr-3" /> Upcoming Movies
            </Link>
            <Link
              href="/about"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-red-400 rounded-md transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              <FiInfo className="mr-3" /> About
            </Link>
            <Link
              href="/blog"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-red-400 rounded-md transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              <FiBook className="mr-3" /> Blog
            </Link>
          </div>

          {/* Auth Section fixed at bottom */}
          <div className="mt-auto p-4 border-t border-gray-800">
            <SignedIn>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Your Account</span>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white transition-colors duration-200"
                >
                  <FiUser className="mr-2" /> Login
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* Overlay when menu open */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-30 md:hidden"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
}
