import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

function CommentCard({ comment }) {
  const [likes, setLikes] = useState(comment.like);
  const ownerDetail = comment.ownerDetail && comment.ownerDetail[0];

  const handleLike = async () => {
    try {
      const response = await axios.post(`/api/v1/like/toggle/c/${comment._id}`);
      setLikes(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex space-x-3 p-4 bg-[#0f0f0f] text-white">
      {ownerDetail && (
        <>
          <img src={ownerDetail.avatar} alt={ownerDetail.username} className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="font-bold">{ownerDetail.username}</span>
              <span className="text-gray-400 text-sm">2 years ago</span>
            </div>
            <p className="mt-1">{comment.content}</p>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <FaThumbsUp className="text-gray-400 cursor-pointer" onClick={handleLike} />
                <span>{comment.like}</span>
              </div>
              <FaThumbsDown className="text-gray-400" />
              <button className="text-gray-400 font-bold">Reply</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CommentCard;