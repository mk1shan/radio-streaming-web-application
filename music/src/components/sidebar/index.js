import React from 'react'
import "./sidebar.css";
import SidebarButton from './SidebarButton';

export default function index() {
  return (
    <div className="sidebar-container">
  <img src="user.png"
   className="profile-img" 
   alt="profile"/>
      <div>
        <SidebarButton/>
      </div>
    </div>
  )
}
