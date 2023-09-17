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
      <h1 className={style.headerLogo}>
        <NavLink to="/">#VANLIFE</NavLink>
      </h1>
      <nav className={style.navbar}>
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
