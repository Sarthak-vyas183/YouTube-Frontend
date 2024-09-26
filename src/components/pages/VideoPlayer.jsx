import React from 'react';
import { FaThumbsUp, FaThumbsDown, FaShare, FaDownload, FaEllipsisH } from 'react-icons/fa';

function VideoPlayer() {
  return (
    <div className="min-h-full w-full flex bg-[rgb(15,15,15)] text-white py-4 px-16">

      {/* Main content */}
      <div className="w-[70%] h-[70%] pr-4">
        {/* Video player */}
        <div className="w-full h-96 mb-4">
          <iframe
            src="https://res.cloudinary.com/sarthak183/video/upload/v1726167029/muaan5t0hwkr7wioq0l4.mp4"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Video title */}
        <h1 className="text-xl font-bold mb-2">कठोपनिषद् | पर - परिच्छेद संवाद (भाग-१) | Kathopanishad Part - 1 | Katha Upanishad in Hindi</h1>

        {/* Channel info and actions */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="Channel avatar" className="rounded-full mr-2" />
            <div>
              <p className="font-bold">Channel Name</p>
              <p className="text-sm text-gray-400">1.5M subscribers</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center bg-[#272727] px-4 py-2 rounded-full">
              <FaThumbsUp className="mr-2" /> 10K
            </button>
            <button className="flex items-center bg-[#272727] px-4 py-2 rounded-full">
              <FaThumbsDown className="mr-2" />
            </button>
            <button className="flex items-center bg-[#272727] px-4 py-2 rounded-full">
              <FaShare className="mr-2" /> Share
            </button>
            <button className="flex items-center bg-[#272727] px-4 py-2 rounded-full">
              <FaDownload className="mr-2" /> Download
            </button>
            <button className="bg-[#272727] p-2 rounded-full">
              <FaEllipsisH />
            </button>
          </div>
        </div>

        {/* Video description */}
        <div className="bg-[#272727] p-4 rounded-lg mb-4">
          <p className="text-sm">1.7K views • 1 year ago</p>
          <p className="mt-2">Video description goes here...</p>
        </div>

        {/* Comments section */}
        <div>
          <h3 className="text-lg font-bold mb-2">12 Comments</h3>
           <h1>here we will show comment component here</h1>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-1/4">
        {/* Shorts section */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">Shorts</h3>
          <div className="flex space-x-2 overflow-x-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-24 h-40 bg-[#272727] rounded-lg flex-shrink-0"></div>
            ))}
          </div>
        </div>

        {/* Recommended videos */}
        <div>
          <h3 className="font-bold mb-2">Recommended</h3>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex mb-2">
              <div className="w-40 h-24 bg-[#272727] rounded-lg mr-2"></div>
              <div>
                <p className="font-bold text-sm">Video Title</p>
                <p className="text-xs text-gray-400">Channel Name</p>
                <p className="text-xs text-gray-400">10K views • 1 year ago</p>
              </div>
            </div>
          ))}
        </div>
      </div> 


    </div>
  );
}

export default VideoPlayer;