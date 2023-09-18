import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  header:
    "bg-[#FFF7ED] flex px-7 py-4 justify-between sticky top-0 w-full backdrop-blur bg-[#FFF7ED]/70",
  headerLogo: "font-bold text-3xl",
  navbar: "flex items-center",
  navLinks: "px-2 text-default font-medium hover:underline hover:text-active",
};

const Header = () => {
  return (
    <header className={style.header}>
      <NavLink to="/" className={style.headerLogo}>
        #VANLIFE
      </NavLink>
      <nav className={style.navbar}>
        <NavLink to="/host" className={style.navLinks}>
          Host
        </NavLink>
        <NavLink to="/about" className={style.navLinks}>
          About
        </NavLink>
        <NavLink to="/vans" className={style.navLinks}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
