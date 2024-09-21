import React from 'react'

function Your_Video() {
  return (
    <div className="bg-[#0F0F0F] text-white p-6 h-[100%] overflow-y-auto pb-4">
      <div className="flex mb-6 bg-gradient-to-b from-[#1E2A3A] via-[#0F1A2A] to-[#0F0F0F] rounded-md">
        <div className="w-1/3 mr-6">
          <img src="https://via.placeholder.com/300x300" alt="Liked videos thumbnail" className="w-full rounded-lg" />
        </div>
        <div className='pt-2'>
          <h2 className="text-3xl font-bold mb-2">Your Videos</h2>
          <p className="text-sm text-gray-400">sarthak vyas</p>
          <p className="text-sm text-gray-400">1,038 videos • No views • Updated today</p>
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
      </div>

      <div className="mb-4">
        <div className="flex space-x-2 mb-4">
          <button className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">All</button>
          <button className="bg-[#272727] text-white px-3 py-1 rounded-full text-sm font-medium">Videos</button>
          <button className="bg-[#272727] text-white px-3 py-1 rounded-full text-sm font-medium">Shorts</button>
        </div>
      </div>

      <div className="space-y-3">
        {[
          { title: "Stone Pelters Vs Major || 💀🔥 Power of Indian Army Major 🦁 IN || #shorts #army #major #motivation", channel: "Maroon Eagle", views: "1.3M views", time: "2 days ago", duration: "1:00" },
          { title: "चमत्कारिक बाबाजी || आचार्य प्रशांत", channel: "आचार्य प्रशांत - Acharya Prashant", views: "11K views", time: "2 hours ago", duration: "0:48" },
          { title: "How Srila Prabhupada made Devotees Paint Krishna's Stories", channel: "Gaurangadas Official", views: "320K views", time: "7 days ago", duration: "0:59" },
          { title: "एक प्राचीन चौडाल की कहानी || आचार्य प्रशांत", channel: "आचार्य प्रशांत - Acharya Prashant", views: "91K views", time: "3 days ago", duration: "1:00" },
          { title: "मंदिर वो जहाँ मन सरल हो जाए || आचार्य प्रशांत (2016)", channel: "आचार्य प्रशांत - Acharya Prashant", views: "385 views", time: "6 years ago", duration: "22:02" },
        ].map((item, index) => (
          <div key={index} className="flex">
            <div className="w-6 mr-4 text-gray-400">{index + 1}</div>
            <div className="w-40 mr-4 relative">
              <img src={`https://via.placeholder.com/160x90?text=Video ${index + 1}`} alt={item.title} className="w-full rounded" />
              <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 rounded">{item.duration}</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.channel} • {item.views} • {item.time}</p>
            </div>
            <button className="text-gray-400 px-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Your_Video
