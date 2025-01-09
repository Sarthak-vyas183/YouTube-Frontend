import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaShare, FaDownload, FaEllipsisH } from 'react-icons/fa';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Default from '../../assets/logo.png';
import { CloudCog } from 'lucide-react';

function VideoPlayer() {
  const [video, setVideo] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { id } = useParams();
  const token = localStorage.getItem('token');

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  const handlePlay = async () => {
    try {
      const response = await axios.get(`/api/v1/videos/${id}`);
      setVideo(response.data.data);
      console.log(response.data.data);
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

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error("You must be logged in to comment");
      return;
    }
    try {
      const response = await axios.post(
        `/api/v1/comment/${id}`,
        {
          content: newComment, // The comment content from the user
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Replace `token` with your actual authentication token
            "Content-Type": "application/json", // Specifies the content type
          },
        }
      );
      setComments([...comments, response.data.data]);
      setNewComment('');
    } catch (error) {
      toast.error("Failed to post comment");
    }
  };

  useEffect(() => {
    handlePlay();
  }, [id]);

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div className="bg-[rgb(15,15,15)] min-h-auto max-w-screen py-6">
      {/* Video Player Section */}
      <div className="bg-black w-full h-[70vh] max-w-4xl mx-auto mb-6 rounded-lg flex justify-center overflow-hidden">
        <video
          src={video.videoFile}
          fullscreen="true"
          controls="true"
        ></video>
      </div>

      <div className="max-w-4xl mx-auto bg-transparant text-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
        <p className="mb-4">
          {video.description}
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className="flex items-center space-x-2 text-green-600 font-semibold"
          >
            <span>👍</span> <span>Like ({likes})</span>
          </button>
          <button
            onClick={handleDislike}
            className="flex items-center space-x-2 text-red-600 font-semibold"
          >
            <span>👎</span> <span>Dislike ({dislikes})</span>
          </button>
          <button className="flex items-center space-x-2 text-blue-600 font-semibold">
            <span>🔗</span> <span>Share</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="max-w-4xl mx-auto bg-transparant text-white shadow-md rounded-lg p-6">
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full outline-none p-2 rounded-lg bg-[#272727] text-white"
            placeholder="Write a comment..."
            rows="2"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Post Comment
          </button>
        </form>
        <h3 className="text-lg font-bold mb-2">{comments.length} comments</h3>
        <div className="space-y-4">
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default VideoPlayer;