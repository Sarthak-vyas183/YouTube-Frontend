import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  FaSearch,
  FaMicrophone,
  FaVideo,
  FaBell,
  FaBars,
} from "react-icons/fa";
import UserProfile from "../pages/UserProfile";
import Sidebar from "./Sidebar.jsx";
import PlayLogo from "./PlayLogo.jsx"
function Nav() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  }, [searchQuery]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <>
      <nav className="bg-[#0f0f0f] text-white p-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        {/* Left section */}
        <div className="flex items-center  px-2">
          <button aria-label="Open menu" className="p-2" onClick={toggleSidebar}>
            <FaBars className="text-xl cursor-pointer" />
          </button> 
          <div className="pl-2">
          <PlayLogo/>
          </div>
        </div>

        {/* Middle section */}
        <div className="flex-grow mx-4 max-w-2xl  px-2">
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-[#121212] border border-[#303030] rounded-l-full px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              aria-label="Search query"
            />
            <button
              type="submit"
              className="bg-[#222222] border border-[#303030] rounded-r-full px-5 py-2 flex items-center justify-center hover:bg-[#3a3a3a]"
              aria-label="Search"
            >
              <FaSearch className="text-gray-400" />
            </button>
            <button
              type="button"
              className="ml-2 bg-[#181818] rounded-full p-2 hover:bg-[#303030]"
              aria-label="Voice search"
            >
              <FaMicrophone className="text-xl" />
            </button>
          </form>
        </div>

        {/* Right section */}
        <div className="flex items-center px-2">
          <button aria-label="Create video" className="p-2">
            <FaVideo className="text-xl cursor-pointer" />
          </button>
          <button aria-label="Notifications" className="p-2">
            <FaBell className="text-xl cursor-pointer" />
          </button>
          <div className="ml-2">
            <UserProfile
              username={"sarthak@183"}
              avatarUrl={
                "http://res.cloudinary.com/sarthak183/image/upload/v1725822478/plgpc2uvuvb5erjvdfis.png"
              }
            />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div ref={sidebarRef}>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>
    </>
  );
}



export default Nav;