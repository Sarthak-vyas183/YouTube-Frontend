import React, { useState } from 'react';
import { FaYoutube, FaSearch, FaMicrophone, FaVideo, FaBell, FaUserCircle, FaBars } from 'react-icons/fa';
import UserProfile from '../pages/UserProfile';
function Nav() {
 const [profile, setProfile] =  useState(false)
  return (
    <nav className="bg-[#0f0f0f] text-white p-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      {/* Left section */}
      <div className="flex items-center">
        <FaBars className="text-xl mr-4 cursor-pointer" />
        <FaYoutube className="text-red-600 text-3xl mr-2" />
        <span className="font-bold text-xl">YouTube</span>
        <sup className="text-xs ml-1">IN</sup>
      </div>

      {/* Middle section */}
      <div className="flex-grow mx-8 max-w-2xl">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#121212] border border-[#303030] rounded-l-full px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          <button className="bg-[#222222] border border-[#303030] rounded-r-full px-5 py-2 flex items-center justify-center hover:bg-[#3a3a3a]">
            <FaSearch className="text-gray-400" />
          </button>
          <button className="ml-2 bg-[#181818] rounded-full p-2 hover:bg-[#303030]">
            <FaMicrophone className="text-xl" />
          </button>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center">
        <FaVideo className="text-xl mx-3 cursor-pointer" />
        <FaBell className="text-xl mx-3 cursor-pointer" />
      <div className={`w-auto h-auto`}>
          <UserProfile username={"sarthak@183"} avatarUrl={"http://res.cloudinary.com/sarthak183/image/upload/v1725822478/plgpc2uvuvb5erjvdfis.png"}/>
      </div>
      </div>

    
    </nav>
  );
}

export default Nav;