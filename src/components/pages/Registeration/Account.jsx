import React from "react";
import { Outlet, Link } from "react-router-dom";
const AccountSelector = () => {
  return (
    <div className="bg-gray-900 min-h-[90vh] flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl w-full max-w-md p-6 space-y-6">
        <div className="flex items-center justify-between">
          <svg
            className="w-12 h-12"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="playGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="white"
              strokeWidth="4"
              fill="none"
            />
            <path d="M35 25 L35 75 L75 50 Z" fill="url(#playGradient)" />
            <text
              x="50"
              y="55"
              fontFamily="Arial, sans-serif"
              fontSize="24"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              PLAY
            </text>
          </svg>
          <span className="text-gray-400 text-sm"><Link to='/Account/login'>Login</Link></span>
        </div>

        <h1 className="text-white text-2xl font-medium">Choose an account</h1>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 rounded-lg transition cursor-pointer">
            <Outlet/>
          </div>

          
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-sm text-gray-400">
        <select className="bg-transparent border-none focus:outline-none">
          <option>English (United States)</option>
        </select>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccountSelector;
