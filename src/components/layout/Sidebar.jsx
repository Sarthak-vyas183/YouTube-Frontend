import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaPlay,
  FaSubscript,
  FaUser,
  FaFilm,
  FaClock,
  FaList,
  FaThumbsUp
} from "react-icons/fa";

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#0F0F0F] bg-opacity-90 text-white transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="flex flex-col pt-16">
        <NavLink to="/" className="flex items-center p-2 hover:bg-gray-800">
          <FaHome className="w-6 h-6 mr-2" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/shorts" className="flex items-center p-2 hover:bg-gray-800">
          <FaPlay className="w-6 h-6 mr-2" />
          <span>Shorts</span>
        </NavLink>
        <NavLink to="/subscription" className="flex items-center p-2 hover:bg-gray-800">
          <FaSubscript className="w-6 h-6 mr-2" />
          <span>Subscriptions</span>
        </NavLink>
        <div className="mt-4 mb-2 border-t border-gray-700"></div>
        <span className="px-2 py-1 text-sm font-semibold">You</span>
        <NavLink to="/yourChannel" className="flex items-center p-2 hover:bg-gray-800">
          <FaUser className="w-6 h-6 mr-2" />
          <span>Your channel</span>
        </NavLink>
        <NavLink to="/yourVideo" className="flex items-center p-2 hover:bg-gray-800">
          <FaFilm className="w-6 h-6 mr-2" />
          <span>Your videos</span>
        </NavLink>
        <NavLink to="/watchLater" className="flex items-center p-2 hover:bg-gray-800">
          <FaClock className="w-6 h-6 mr-2" />
          <span>Watch Later</span>
        </NavLink>
        <NavLink to="/playlist" className="flex items-center p-2 hover:bg-gray-800">
          <FaList className="w-6 h-6 mr-2" />
          <span>Playlist</span>
        </NavLink>
        <NavLink to="/likedVideo" className="flex items-center p-2 hover:bg-gray-800">
          <FaThumbsUp className="w-6 h-6 mr-2" />
          <span>Liked Videos</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;