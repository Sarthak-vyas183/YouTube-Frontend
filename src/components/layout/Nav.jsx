import React, { useState } from 'react'
import { Menu, Search, Mic, Video, Bell, User } from 'lucide-react'

export default function Navbar() {
const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-[#0f0f0f] text-white p-2 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
            <Menu size={24} />
          </button>
          <img src="../assets/logo.png" alt="YouTube" className="ml-4" />
        </div>
        <div className="flex-grow max-w-2xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#121212] text-white pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-0 top-0 h-full px-4">
              <Search size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2"><Mic size={20} /></button>
          <button className="p-2"><Video size={20} /></button>
          <button className="p-2"><Bell size={20} /></button>
          <button className="p-2"><User size={20} /></button>
        </div>
      </nav>
      <div className="flex flex-grow">
        <aside className={`bg-[#0f0f0f] text-white w-60 flex-shrink-0 transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="p-4">
            <a href="#" className="block py-2 hover:bg-gray-700 rounded">Home</a>
            <a href="#" className="block py-2 hover:bg-gray-700 rounded">Shorts</a>
            <a href="#" className="block py-2 hover:bg-gray-700 rounded">Subscriptions</a>
            <hr className="my-4 border-gray-600" />
            <a href="#" className="block py-2 hover:bg-gray-700 rounded">Your channel</a>
            <a href="#" className="block py-2 hover:bg-gray-700 rounded">History</a>
            <a href="#" className="block py-2 hover:bg-gray-700 rounded">Your videos</a>
            <a href="#" className="block py-2 hover:bg-gray-700 rounded">Watch Later</a>
            <a href="#" className="block py-2 hover:bg-gray-700 rounded">Liked videos</a>
          </div>
        </aside>
        <main className="flex-grow bg-[#0f0f0f] p-4">
          {/* Home component will be rendered here */}
        </main>
      </div>
    </div>
  )
}