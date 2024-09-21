import React from 'react'

function AllVideos() {
  return ( 
<div className='flex flex-wrap overflow-y-scroll w-full h-full justify-start '>
    <div className="bg-[#0F0F0F] rounded-lg max-w-[450px] max-h-[360px] overflow-hidden m-2">
    <div className="relative w-full h-[70%]">
      <img 
        src="https://i.ytimg.com/vi/GkKNxyLp_V0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBS19p5Eqv5RzCkHSsuh-qs8Wjvsg" 
        alt="Video thumbnail" 
        className="w-full h-full aspect-video object-cover"
      />
      <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
        24:03
      </span>
    </div>

    <div className="p-3 flex w-full h-[30%]">
      <img 
        src="https://yt3.ggpht.com/dwzI3o0Lx9J8WmHJmqT4RclChSDjpMdRcBA32xPiZJGIieW203GuRvbKwcDb0AARN0x2m4xgCg=s68-c-k-c0x00ffffff-no-rj" 
        alt="Channel avatar" 
        className="w-9 h-9 rounded-full mr-3"
      />
      <div>
        <h3 className="text-white text-sm font-medium line-clamp-2 mb-1">
          Day-0 | Course Details | Free AWS Zero to Hero Course for DevOps Engineers #devops...
        </h3>
        <p className="text-gray-400 text-xs">Abhishek Veeramalla</p>
        <p className="text-gray-400 text-xs">
          461K views • 1 year ago
        </p>
      </div>
    </div>
    </div>
 </div> 
  )
}

export default AllVideos
