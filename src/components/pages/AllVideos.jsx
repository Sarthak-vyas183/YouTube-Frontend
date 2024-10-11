import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from 'react-router-dom';

function AllVideos() {
  const [videos, setVideos] = useState([]);

  const fetchAllVideos = async () => {
    try {
      const response = await axios.get("/api/v1/videos");
      setVideos(response.data.data);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        toast.error("Videos not found");
        return; // Ensure no further error handling
      }
      toast.error('Internal server error');
    }
  };1

  

  useEffect(() => {
    fetchAllVideos();
  }, []);

  return (
    <div className='flex flex-wrap overflow-y-scroll w-full h-full justify-start'>
    {videos.map((video) => (
      <NavLink to={`/playvideo/${video._id}`} key={video._id}>
        <div onClick={() => handlePlay(video._id)} className="bg-[#0F0F0F] rounded-lg max-w-[450px] max-h-[360px] overflow-hidden m-2">
          <div className="relative w-full h-[70%]">
            <img 
              src={video.thumbnail || "/default-thumbnail.jpg"} 
              alt={video.title || "Video thumbnail"} 
              className="w-full h-full aspect-video object-cover"
            />
            {video.duration && (
              <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                {Math.floor(video.duration)}
              </span>
            )}
          </div>
          
          <div className="p-3 flex w-full bg-slate-500 bg-opacity-10 h-[30%]">
            {video.ownerDetail?.avatar ? (
              <img 
                src={video.ownerDetail.avatar} 
                alt={video.ownerDetail.username || "Channel avatar"} 
                className="w-9 h-9 rounded-full mr-3"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gray-500 mr-3"></div>
            )}
            <div>
              <h1 className='text-white'>{video.title || "Untitled Video"}</h1>
              <h3 className="text-white text-sm font-medium line-clamp-2 mb-1">
                {video.description 
                  ? video.description.length > 30 
                    ? `${video.description.substring(0, 30)}...` 
                    : video.description 
                  : "No Description"}
              </h3>
              <span className='flex gap-4'>
                <p className="text-gray-400 text-xs">{video.ownerDetail?.username || "Unknown User"}</p>
                <p className="text-gray-400 text-xs">
                  Views: {video.views || 0}
                </p>
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    ))}
  </div>
  
  );
}

export default AllVideos;
