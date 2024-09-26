import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

 function CommentCard () {
  return (
    <div className="flex space-x-3 p-4 bg-[#0f0f0f] text-white">
      <img src="http://res.cloudinary.com/sarthak183/image/upload/v1725822478/plgpc2uvuvb5erjvdfis.png" alt="sarthak@183" className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-bold">@sarthakvyas</span>
          <span className="text-gray-400 text-sm">2 year ago</span>
        </div>
        <p className="mt-1">this is the first comment of my on this video</p>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center space-x-1">
            <FaThumbsUp className="text-gray-400" />
            <span>11k</span>
          </div>
          <FaThumbsDown className="text-gray-400" />
          <button className="text-gray-400 font-bold">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;