import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import coverImage from '../../assets/coverImage.png'
import avatar from "../../assets/user.png"

function Your_Channel() {
  const { token, User } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [channelProfile, setChannelProfile] = useState({});

  const fetchUserChannel = async () => {
    try {
      const response = await axios.get(`/api/v1/user/channel/${User.username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChannelProfile(response.data.data)
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      if (error.response && error.response.status !== 200) {
        toast.error("Invalid channel");
      }
    }
  };

  useEffect(() => {
    if (!token || !User.username) {
      return;
    }
    fetchUserChannel();
  }, [token, User.username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-white font-sans h-screen overflow-y-auto">
      <header className="bg-[#5675F6]">
        <img
          src={coverImage}
          alt=""
          className="w-full h-48"
        />
      </header>

      <section className="flex p-4 items-start">
        <img
          src={channelProfile.avatar || avatar }
          alt="Channel Owner"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold flex items-center">
            {channelProfile.fullName || "Guest User"}
            <span className="text-blue-400 ml-1">✓</span>
          </h2>
          <p className="text-sm text-gray-400">
           {channelProfile.username} · {channelProfile.subscriberCount} subscribers · 10 videos
          </p>
          <p className="text-sm mt-1">
            Hi Everyone, My name is Abhishek and welcome to my channel :) ...more
          </p>
          
          <div className="mt-2 space-x-2">
            <button className="bg-gray-700 text-white px-4 py-1 rounded-md">
              Customise channel
            </button>
            <button className="border border-gray-600 text-blue-400 px-4 py-1 rounded-md">
              Manage Videos
            </button>
          </div>
        </div>
      </section>

      <nav className="border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
        <ul className="flex p-2">
          <Link to="" className="mr-6 border-b-2 border-white">
            Home
          </Link>
          <Link to="videos" className="mr-6">
            Videos
          </Link>
          <Link to="Shorts" className="mr-6">
            Shorts
          </Link>
          <Link to="Live" className="mr-6">
            Live
          </Link>
          <Link to="Playlist" className="mr-6">
            Playlists
          </Link>
          <Link to="posts" className="mr-6">
            Posts
          </Link>
          <Link className="ml-auto">🔍</Link>
        </ul>
      </nav>

      <section className="w-full min-h-[50vh] bg-transparent">
        <Outlet />
      </section>
    </div>
  );
}

export default Your_Channel;
