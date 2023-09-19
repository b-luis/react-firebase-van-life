import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  header:
    "bg-[#FFF7ED] flex px-7 py-4 justify-between sticky top-0 w-full backdrop-blur bg-[#FFF7ED]/70",
  headerLogo: "font-bold text-3xl mr-3",
  navbar: "flex items-center",
  navLinks: "px-2 text-default font-medium hover:underline hover:text-active",
  active: "text-[#e0881c] px-2 font-semibold underline underline-offset-4",
};

const Header = () => {
  return (
    <header className={style.header}>
      <NavLink to="/" className={style.headerLogo}>
        #VANLIFE
      </NavLink>
      <nav className={style.navbar}>
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive ? style.active : style.navLinks
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? style.active : style.navLinks
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            isActive ? style.active : style.navLinks
          }
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
