import React from "react";
import sidebarStyle from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={sidebarStyle.nav_wrapper}>
      <nav className={sidebarStyle.nav_list}>
        <a href="">Host</a>
        <a href="">About</a>
        <a href="">Vans</a>
        <a href="">Profile</a>
      </nav>
    </div>

  );
};

export default Sidebar;
