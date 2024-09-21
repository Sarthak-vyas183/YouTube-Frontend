import React from 'react'

function Watch_later() {
  return (
    <div className="bg-[#0F0F0F] text-white p-6 flex h-full overflow-hidden">
      {/* Left section */}
      <div className="w-1/3 mr-6 bg-gradient-to-b p-2 from-[#1E2A3A] via-[#0F1A2A] to-[#0F0F0F] rounded-md">
        <div className="relative p-2">
          <img src="https://via.placeholder.com/500x300" alt="Maleficent" className="w-full rounded-lg" />
          <span className="absolute bottom-2 left-2 bg-red-600 text-white px-1 rounded">B S.S</span>
        </div>
        <h2 className="text-2xl font-bold mt-4">Watch later</h2>
        <p className="text-sm text-gray-400">sarthak vyas</p>
        <p className="text-sm text-gray-400">136 videos • No views • Last updated on Aug 23, 2024</p>
        <div className="flex mt-4 items-center">
          <button className="bg-white text-black py-2 px-4 rounded-full font-medium mr-2 flex items-center">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Play all
          </button>
          <button className="bg-[#272727] text-white py-2 px-4 rounded-full font-medium flex items-center">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
            </svg>
            Shuffle
          </button>
          <button className="ml-2 bg-[#272727] text-white p-2 rounded-full">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Right section */}
      <div className="w-2/3 h-full overflow-y-auto pr-4">
        <div className="flex mb-4 space-x-2">
          <button className="bg-[#272727] text-white px-3 py-1 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
            </svg>
            Sort
          </button>
          <button className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">All</button>
          <button className="bg-[#272727] text-white px-3 py-1 rounded-full text-sm font-medium">Videos</button>
          <button className="bg-[#272727] text-white px-3 py-1 rounded-full text-sm font-medium">Shorts</button>
        </div>

        {/* Video list */}
        <div className="space-y-3">
          {/* Repeat this block for each video */}
          {[...Array(20)].map((_, index) => (
            <div key={index} className="flex">
              <img src="https://via.placeholder.com/500x500" alt="Video thumbnail" className="w-40 h-24 object-cover rounded-lg mr-4" />
              <div>
                <h3 className="font-medium">आत्म-ज्ञान क्या है? || आचार्य प्रशांत, सुखाष्टक पर (2019)</h3>
                <p className="text-sm text-gray-400">आचार्य प्रशांत - Acharya Prashant • 72K views • 4 years ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Watch_later