import { Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  // css properties must be in camelCase
  const activeclassNames = {
    fontWeight: "600",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    color: "#804a1c",
  };

  return (
    <>
      <div className="navlink-wrapper">
        <nav className="host-nav">
          <NavLink
            style={({ isActive }) => (isActive ? activeclassNames : null)}
            to="."
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeclassNames : null)}
            to="income"
          >
            Income
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeclassNames : null)}
            to="vans"
          >
            Vans
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeclassNames : null)}
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
