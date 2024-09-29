import React from "react";
import { useNavigate, NavLink, Outlet, Navigate } from "react-router-dom";

function Home() {
 
  return (
    <div className="w-full h-full flex"> 
      <section className="w-[100%] min-h-full bg-[#0F0F0F] p-2 overflow-hidden">
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
