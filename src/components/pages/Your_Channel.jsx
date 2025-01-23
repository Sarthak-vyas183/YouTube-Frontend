import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function YourChannel() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [channelData, setChannelData] = useState({});

  useEffect(() => {
    if (!token) {
      toast.error("You must be logged in to access this page");
      navigate('/');
      return;
    }

    const fetchChannelData = async () => {
      try {
        const response = await axios.get('/api/v1/channel', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setChannelData(response.data.data);
      } catch (error) {
        toast.error("Failed to fetch channel data");
      }
    };

    fetchChannelData();
  }, [token, history]);

  return (
    <div className="min-h-full w-full flex flex-col bg-[rgb(15,15,15)] text-white py-4 px-4 lg:px-16">
      <h1 className="text-2xl font-bold mb-4">Your Channel</h1>
      {/* Render channel data */}
      <div className="bg-[#272727] p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold">{channelData.name}</h2>
        <p className="text-sm">{channelData.description}</p>
      </div>
      {/* Add more channel details and components as needed */}
    </div>
  );
}

export default YourChannel;