import React from 'react';
import "./sidebar.css";
import "./sidebarButton.css";
import SidebarButton from './SidebarButton';
import profileImage from './user.png'; // Import your profile image
import { MdFavoriteBorder } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() { 
  return (
    <div className="sidebar-container">
      <div>
        <img 
          src={profileImage} 
          className="profile-img" 
          alt="profile"
        />
      </div>
      <div className="sidebar-buttons">
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="Favorites" to="/favourites" icon={<MdFavoriteBorder/>}/>
        <SidebarButton title="Library" to="/library" icon={<IoLibrary/>}/>
      </div>
      <div>
        <SidebarButton title="Sign out" to="" icon={<FaSignOutAlt/>}/>
      </div>
    </div>
  );
}
