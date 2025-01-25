import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaShare, FaDownload, FaEllipsisH } from 'react-icons/fa';
import Comment from './Comment';
import { useParams, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 
import axios from 'axios';
import Default from '../../assets/logo.png';

function VideoPlayer() {
  const [video, setVideo] = useState({});
  const [comments, setComments] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [likecount, setLikeCount] = useState(0);

  const handlePlay = async () => {
    try {
      const response = await axios.get(`/api/v1/videos/${id}`);
      setVideo(response.data.data);
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  const getAllComments = async () => {
    if (!id) return;
    try {
      const response = await axios.get(`/api/v1/comment/${id}`);
      if (!response) {
        alert("No comments found");
        return;
      }
      setComments(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecommendedVideos = async () => {
    try {
      const response = await axios.get("/api/v1/videos");
      setRecommendedVideos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
  
    if (!token) {
      toast.error("You must be logged in to comment");
      return;
    }
  
    if (!newComment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }
  
    try {
      setLoading(true);
  
      const response = await axios.post(
        `/api/v1/comment/${id}`,
        { content: newComment.trim() },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setNewComment('');
      toast.success("Comment posted successfully");
      getAllComments();
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Failed to post comment");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const getLikedCount = async () => { 
    try {
      const response = await axios.post(`/api/v1/videos/toggle/publish/${id}`);
      setLikeCount(response.data.count);
      console.log(response.data.count);
    } catch (error) {
      toast.error("Internal server error");
    }
  }
  
  const handleLike = async () => {
    try {
        const response = await axios.post(
          `/api/v1/like/toggle/v/${id}`,
          { content: newComment.trim() },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
      getLikedCount()
    } catch (error) {
      console.log(error)
      toast.error("Internal server error");
    }
  }

  useEffect(() => {
    handlePlay();
    getAllComments();
    getRecommendedVideos();
    getLikedCount();
  }, [id]);

  return (
    <div className="min-h-full w-full flex flex-col lg:flex-row bg-[rgb(15,15,15)] text-white py-4 px-4 lg:px-16 overflow-x-hidden">
      {/* Main content */}
      <div className="w-full lg:w-2/3 pr-0 lg:pr-4">
        {/* Video player */}
        <div className="w-full h-64 lg:h-96 mb-4">
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
            <img 
              src={video.ownerDetail && video.ownerDetail.avatar ? video.ownerDetail.avatar : Default} 
              alt="Channel avatar" 
              className="rounded-full mr-2 w-10 h-10" 
            />
            <div>
              <p className="font-bold">{video.ownerDetail && video.ownerDetail.username ? video.ownerDetail.username : 'Guest User'}</p>
              <p className="text-sm text-gray-400">1.5M subscribers</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button onClick={handleLike} className="flex items-center bg-[#272727] px-4 py-2 rounded-full">
              <FaThumbsUp className="mr-2" /> {likecount}
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
          <p className="mt-2">{video.description}</p>
        </div>

        {/* Comments section */}
        <div>
        <div className="mt-4">
            <textarea
              className="w-full p-2 bg-[#272727] rounded-lg text-white outline-none"
              rows="3"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              className="mt-2 px-4 py-2 bg-blue-600 rounded-full text-white"
              onClick={handleCommentSubmit}
              disabled={loading}
            >
              Post Comment
            </button>
          </div>
          <h3 className="text-lg font-bold mb-2">{comments.length} comments</h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))}
          </div>
          {/* Comment input box */}
         
        </div>
      </div>

      {/* Recommended videos */}
      <div className="w-full lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">Recommended Videos</h2>
        <div className="space-y-4">
          {recommendedVideos.map((video) => (
            <NavLink to={`/playvideo/${video._id}`} key={video._id}>
              <div className="flex items-start bg-[#0F0F0F] rounded-lg overflow-hidden p-3">
                <img 
                  src={video.thumbnail || "/default-thumbnail.jpg"} 
                  alt={video.title || "Video thumbnail"} 
                  className="w-1/3 h-full object-cover rounded-lg"
                />
                <div className="ml-3 w-2/3">
                  <h3 className="text-white text-sm font-bold">{video.title || "Untitled Video"}</h3>
                  <div className="flex items-center mt-2">
                    <img 
                      src={video.ownerDetail?.avatar || Default} 
                      alt={video.ownerDetail?.username || "Channel avatar"} 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <p className="text-gray-400 text-xs">{video.ownerDetail?.username || "Unknown User"}</p>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">Views: {video.views || 0}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;