import React from "react";
import { Link } from "react-router-dom";

const style = {
	header: "bg-[#FFF7ED] flex p-7 justify-between ",
	headerLogo: "font-bold text-3xl",
	navbar: "flex items-center",
	navLinks: "px-2 text-default font-medium"
};

const Header = () => {
	return (
		<header className={style.header}>
			<h1 className={style.headerLogo}>
				<Link to="/">#VANLIFE</Link>
			</h1>
			<nav className={style.navbar}>
				<Link to="/about" className={style.navLinks}>
					About
				</Link>

				<Link to="/vans" className={style.navLinks}>
					Vans
				</Link>
			</nav>
		</header>
	);
};

export default Header;
