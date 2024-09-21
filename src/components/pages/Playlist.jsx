import React from 'react';

function Playlist() {
  return (
    <div className="bg-[#0F0F0F] text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Playlists</h1>
      <div className="mb-4">
        <select className="bg-gray-800 text-white px-3 py-1 rounded">
          <option>Recently added</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {/* Playlist Item 1 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="relative">
            <img src="https://via.placeholder.com/400x225" alt="Liked videos" className="w-full h-48 object-cover" />
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-1 text-xs">1,038 videos</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-base">Liked videos</h3>
            <p className="text-sm text-gray-400">Private • Playlist</p>
            <p className="text-sm text-gray-400">Updated today</p>
            <a href="#" className="text-sm text-blue-400 hover:underline">View full playlist</a>
          </div>
        </div>

        {/* Playlist Item 2 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="relative">
            <img src="https://via.placeholder.com/400x225" alt="लक्ष्य कैसे हासिल करें" className="w-full h-48 object-cover" />
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-1 text-xs">795 videos</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-base">लक्ष्य कैसे हासिल करें</h3>
            <p className="text-sm text-gray-400">आचार्य प्रशांत - Acharya Prashant • Playlist</p>
            <a href="#" className="text-sm text-blue-400 hover:underline">View full playlist</a>
          </div>
        </div>

        {/* Playlist Item 3 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="relative">
            <img src="https://via.placeholder.com/400x225" alt="Watch later" className="w-full h-48 object-cover" />
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-1 text-xs">136 videos</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-base">Watch later</h3>
            <p className="text-sm text-gray-400">Private • Playlist</p>
            <a href="#" className="text-sm text-blue-400 hover:underline">View full playlist</a>
          </div>
        </div>

        {/* Playlist Item 4 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="relative">
            <img src="https://via.placeholder.com/400x225" alt="MySQL Full Free Course" className="w-full h-48 object-cover" />
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-1 text-xs">26 videos</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-base">MySQL Full Free Course by WsCube Tech</h3>
            <p className="text-sm text-gray-400">WsCube Tech • Playlist</p>
            <a href="#" className="text-sm text-blue-400 hover:underline">View full playlist</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlist;