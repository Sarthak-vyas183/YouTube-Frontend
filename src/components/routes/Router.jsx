import React from 'react'
import {Routes, Route} from 'react-router-dom';

// import the componets
import Home from "../pages/Home"
import History from '../pages/History';
import LikedVideo from "../pages/Liked_video"
import Playlist from "../pages/Playlist"
import Shorts from "../pages/Shorts"
import Sidebar from '../pages/sidebar';
import Subscription from "../pages/Subscription"
import WatchLater from "../pages/Watch_later"
import YourChannel from "../pages/Your_Channel"
import YourVideo from "../pages/Your_Video"

function Router() {
  return (
    <div className='w-full h-[89.5%]'>
      <Routes>
        
         <Route path="/" element={<Home/>}>  
             <Route path='history' element={<History/>} />
             <Route path='likedVideo' element={<LikedVideo/>} />
             <Route path='playlist' element={<Playlist/>} />
             <Route path='shorts' element={<Shorts/>} />
             <Route path='subscription' element={<Subscription/>} /> 
             <Route path='watchLater' element={<WatchLater/>} /> 
             <Route path='yourChannel' element={<YourChannel/>} /> 
             <Route path='yourVideo' element={<YourVideo/>} /> 
         </Route>

      </Routes>
    </div>
  )
}

export default Router
