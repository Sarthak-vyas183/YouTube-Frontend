import React from "react";
import { useAuth } from "../utiles/useAuth";
import { useNavigate, NavLink, Outlet, Navigate } from "react-router-dom";

function Home() {
  const { user } = useAuth();
  return (
    <div className="w-full h-full flex"> 


      <section className="w-[15%] min-h-full bg-[#0F0F0F] text-white border-r-black">
        <nav className="flex flex-col">
          <NavLink to="/" className="flex items-center p-2 hover:bg-gray-800">
            <svg className="w-6 h-6 mr-2" />
            <span>Home</span>
          </NavLink> 

          <NavLink to="/shorts" className="flex items-center p-2 hover:bg-gray-800">
            <svg className="w-6 h-6 mr-2" /* Add shorts icon SVG here */ />
            <span>Shorts</span>
          </NavLink> 

          <NavLink
            to="/subscription"
            className="flex items-center p-2 hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6 mr-2" /* Add subscriptions icon SVG here */
            />
            <span>Subscriptions</span>
          </NavLink>

          <div className="mt-4 mb-2 border-t border-gray-700"></div>

          <span className="px-2 py-1 text-sm font-semibold">You</span>
          {/* Add more menu items here following the same pattern */}
          <NavLink
            to="/yourChannel"
            className="flex items-center p-2 hover:bg-gray-800"
          >
            <svg className="w-6 h-6 mr-2" /* Add channel icon SVG here */ />
            <span>Your channel</span>
          </NavLink>
          {/* ... other menu items ... */}
          <NavLink
            to="/yourVideo"
            className="flex items-center p-2 hover:bg-gray-800"
          >
            <svg className="w-6 h-6 mr-2" /* Add videos icon SVG here */ />
            <span>Your videos</span>
          </NavLink> 

          <NavLink
            to="/watchLater"
            className="flex items-center p-2 hover:bg-gray-800"
          >
            <svg className="w-6 h-6 mr-2" /* Add videos icon SVG here */ />
            <span>watch Later</span>
          </NavLink>  

          <NavLink
            to="/playlist"
            className="flex items-center p-2 hover:bg-gray-800"
          >
            <svg className="w-6 h-6 mr-2" /* Add videos icon SVG here */ />
            <span>playlist</span>
          </NavLink>  

           <NavLink
            to="/likedVideo"
            className="flex items-center p-2 hover:bg-gray-800"
          >
            <svg className="w-6 h-6 mr-2" /* Add videos icon SVG here */ />
            <span>Liked Videos</span>
          </NavLink>   








        </nav>
      </section> 

      

      <section className="w-[85%] min-h-full bg-[#0F0F0F] p-2 overflow-hidden">
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
