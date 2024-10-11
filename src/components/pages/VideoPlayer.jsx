import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaShare, FaDownload, FaEllipsisH } from 'react-icons/fa';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 
import axios from 'axios';

function VideoPlayer() {
  const [video, setvideo] = useState({});
  const [Recommeded, setRecommended] = useState([]);

  const {id} = useParams();
  const handlePlay = async () => {
    try {
      const response = await axios.get(`/api/v1/videos/${id}`)
      console.log(response.data.data)
      setvideo(response.data.data)
    } catch (error) {
      console.log(error)
      toast.error("Internal server error")
    }
  }  
  const getRecommendedVideos = async () => {
     try {
       const response = await axios.get('/api/v1/videos');
       console.log(response.data.data)
       setRecommended(response.data.data)
     } catch (error) {
      console.log(error)
      toast.error("Internal server Error")
     }
  }

  useEffect(()=>{
    handlePlay()
    getRecommendedVideos()
  },[])
  return (
    <div className="min-h-full w-full flex bg-[rgb(15,15,15)] text-white py-4 px-16">

      {/* Main content */}
      <div className="w-[70%] h-[70%] pr-4">
        {/* Video player */}
        <div className="w-full h-96 mb-4">
          <iframe
            src={video.videoFile}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Video title */}
        <h1 className="text-xl font-bold mb-2">{video.title}</h1>

        {/* Channel info and actions */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={video.ownerDetail.avatar} alt="Channel avatar" className="rounded-full mr-2 w-10 h-10" />
            <div>
              <p className="font-bold">{video.ownerDetail.username}</p>
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
           <Comment/>
           <Comment/>
           <Comment/>
           <Comment/>
           <Comment/>
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