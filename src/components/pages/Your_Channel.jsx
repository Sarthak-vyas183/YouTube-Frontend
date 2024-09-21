import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Your_Channel() {
  return (
    <div className="bg-gray-900 text-white font-sans h-screen overflow-y-auto">
      <header className="bg-amber-900">
        <img src="https://yt3.googleusercontent.com/c6lIh5YGWLddm8sG8VZZgqKLyaVBFtwA3aKJMLshUHQK3D_xyBkYnh6q6WwfbzRHll_Yttmo=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="" className="w-full" />
      </header>

      <section className="flex p-4 items-start">
        <img src="https://yt3.googleusercontent.com/dwzI3o0Lx9J8WmHJmqT4RclChSDjpMdRcBA32xPiZJGIieW203GuRvbKwcDb0AARN0x2m4xgCg=s160-c-k-c0x00ffffff-no-rj" alt="Channel Owner" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-bold flex items-center">
            Abhishek.Veeramalla 
            <span className="text-blue-400 ml-1">✓</span>
          </h2>
          <p className="text-sm text-gray-400">@AbhishekVeeramalla · 347K subscribers · 420 videos</p>
          <p className="text-sm mt-1">Hi Everyone, My name is Abhishek and welcome to my channel :) ...more</p>
          <a href="https://buymeacoffee.com/abhishekprd" className="text-blue-400 text-sm">buymeacoffee.com/abhishekprd and 7 more links</a>
          <div className="mt-2 space-x-2">
            <button className="bg-gray-700 text-white px-4 py-1 rounded-md">Subscribed ▼</button>
            <button className="border border-gray-600 text-blue-400 px-4 py-1 rounded-md">Join</button>
          </div>
        </div>
      </section>

      <nav className="border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
        <ul className="flex p-2">
          <Link to="" className="mr-6 border-b-2 border-white">Home</Link>
          <Link to="videos"  className="mr-6">Videos</Link>
          <Link to="Shorts" className="mr-6">Shorts</Link>
          <Link to="Live" className="mr-6">Live</Link>
          <Link to="Playlist" className="mr-6">Playlists</Link>
          <Link to="posts" className="mr-6">Posts</Link>
          <Link className="ml-auto">🔍</Link>
        </ul>
      </nav> 

      <section className='w-full min-h-[50vh] bg-transparent'>
        <Outlet/>
      </section>
    </div>
  );
}

export default Your_Channel;