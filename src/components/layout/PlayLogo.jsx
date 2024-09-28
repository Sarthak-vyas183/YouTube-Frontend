import React from "react";

function PlayLogo() {
  return (
    <div>
      <svg
        className="w-12 h-12"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="playGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
    </div> 
  );
}

export default PlayLogo;
