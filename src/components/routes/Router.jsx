import React from 'react'
import {Routes, Route} from 'react-router-dom';

// import the componets
import Home from "../pages/Home"

function Router() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Router
