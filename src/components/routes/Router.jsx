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
import AllVideos from '../pages/AllVideos';
import YourVideos from '../pages/AllYourChannelDetail/YourVideos';
import YourPosts from '../pages/AllYourChannelDetail/YourPosts';
import YourShorts from '../pages/AllYourChannelDetail/YourShorts';
import YourPlaylist from '../pages/AllYourChannelDetail/YourPlaylist';
import AllPost from '../pages/AllYourChannelDetail/AllPost';
import VideoPlayer from '../pages/VideoPlayer';
import AccountSelector from '../pages/Registeration/Account';

function Router() {
  return (
    <div className='w-full h-[89.5%] absolute top-[10vh]'>
      <Routes>
        
         <Route path="/" element={<Home/>}>  
             <Route path='/' element={<AllVideos/>} />
             <Route path='history' element={<History/>} />
             <Route path='likedVideo' element={<LikedVideo/>} />
             <Route path='playlist' element={<Playlist/>} />
             <Route path='shorts' element={<Shorts/>} />
             <Route path='subscription' element={<Subscription/>} /> 
             <Route path='watchLater' element={<WatchLater/>} /> 


             <Route path='yourChannel' element={<YourChannel/>}>
                 
                 <Route path='' element={<AllPost/>}/>
                 <Route path='videos' element={<YourVideos/>}/>
                 <Route path='posts' element={<YourPosts/>}/>
                 <Route path='Shorts' element={<YourShorts/>}/>
                 <Route path='playlist' element={<YourPlaylist/>}/>
                 <Route path='live' element={<AllPost/>}/>

             </Route>


             <Route path='yourVideo' element={<YourVideo/>} /> 

             
         </Route>
         <Route path='/playvideo' element={<VideoPlayer/>}/>
         <Route path='/Account' element={<AccountSelector/>}/>
      </Routes>
    </div>
  )
}

export default Router
