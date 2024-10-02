import React, { useContext, useState } from 'react';
import { FaUserCircle, FaChevronRight, FaSignOutAlt, FaYoutube, FaDollarSign } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
const UserProfile = ({ username, avatarUrl }) => {
  const {token, LogoutUser} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div 
        className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt={username} className="w-8 h-8 rounded-full" />
        ) : (
          <FaUserCircle className="w-8 h-8 text-gray-400" />
        )}
        <span className="text-white font-medium">{username}</span>
      </div>

      {isOpen && (
        <div className="absolute right-4 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl z-10">
          <div className="p-4 border-b border-gray-700">
            <p className="text-blue-400 text-sm cursor-pointer hover:underline"><Link to={"/yourChannel"}>View your channel</Link></p>
          </div>
          <div className="py-2">
            <MenuItem icon={<FaUserCircle />} text="Switch account" rightIcon={<FaChevronRight />} />
            <MenuItem icon={<FaSignOutAlt />} text={token ? <p onClick={()=> LogoutUser()}>sign out</p> : <Link to={'/account/login'}>sign in</Link> } />
          </div>
          <div className="border-t border-gray-700 py-2">
            <MenuItem icon={<FaYoutube />} text="YouTube Studio" />
            <MenuItem icon={<FaDollarSign />} text="Purchases and memberships" />
          </div>
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, text, rightIcon }) => (
  <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer">
    <div className="flex items-center space-x-3">
      <span className="text-gray-400">{icon}</span>
      <span className="text-white">{text}</span>
    </div>
    {rightIcon && <span className="text-gray-400">{rightIcon}</span>}
  </div>
);

export default UserProfile;