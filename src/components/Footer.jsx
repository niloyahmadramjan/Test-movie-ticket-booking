"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  left-0 w-full bg-[#141414]  text-white z-50">
      <div className="max-w-8xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="flex gap-4 justify-center  flex-col">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center w-20">
              <div class="relative flex items-center space-x-0 mb-8">
                
                <span className="text-white text-3xl font-bold font-['Inter']">Vibe</span>
               
                <span className="text-[#883131] text-3xl font-bold font-['Inter']">Pass</span>
                <div className="absolute bottom-[-6px] w-1/2 h-1 bg-red-600 rounded-full left-1/2 -translate-x-1/2"></div>
              </div>
              {/* <span className="ml-4 text-[#B81D24] font-bold text-2xl md:text-3xl">Cinemas</span> */}
            </Link>
          </div>
          <p className="text-[#CCCCCC] text-sm md:text-base">
            Your trusted platform for movies, events and more.
            Book seats, pay securely, and enjoy the show.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><Link href="/" className="text-white hover:text-[#E50914] font-bold">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-[#E50914] font-bold">About</Link></li>
            <li><Link href="/blog" className="text-white hover:text-[#E50914] font-bold">Blog</Link></li>
            <li><Link href="/contact" className="text-white hover:text-[#E50914] font-bold">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4 ">Support</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><Link href="/help-center" className="text-white hover:text-[#E50914] font-bold">Help Center</Link></li>
            <li><Link href="/terms" className="text-white hover:text-[#E50914] font-bold">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="text-white hover:text-[#E50914] font-bold">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4 ">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" className="text-white hover:text-[#1877F2]"><FaFacebook size={25} /></a>
            <a href="#" target="_blank" className="text-white hover:text-[#E1306C]"><FaInstagram size={25} /></a>
            <a href="#" target="_blank" className="text-white hover:text-[#FF0000]"><FaYoutube size={25} /></a>
            <a href="#" target="_blank" className="text-white hover:text-[#1DA1F2]"><FaTwitter size={25} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="  py-4 px-12 bg-[#282828]  text-[#CCCCCC] text-sm hidden md:flex items-center justify-between flex-wrap">
        <div className="flex justify-around gap-6">
          <Link href="/terms" className="text-white hover:text-[#E50914] font-semibold">Terms & Conditions</Link>
          <Link href="/copyright" className="text-white hover:text-[#E50914] font-semibold">Copyright Notice</Link>
          <Link href="/privacy" className="text-white hover:text-[#E50914] font-semibold">Privacy Policy</Link>
          <Link href="/disclaimer" className="text-white hover:text-[#E50914] font-semibold">Disclaimer</Link>
          <Link href="/whistleblowing" className="text-white hover:text-[#E50914] font-semibold">Whistleblowing Policy</Link>
          <Link href="/abc-policy" className="text-white hover:text-[#E50914] font-semibold">ABC Policy</Link>
        </div>
        <p className="mt-2 md:mt-0 font-semibold">© 2025 Ticket Booking Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}
