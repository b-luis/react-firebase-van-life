import React from "react";
import { Outlet, Link } from "react-router-dom";
import classNames from "classnames";

const navStyles = "flex";

const HostLayout = () => {
  return (
    <>
      <nav className={`${navStyles} host-nav`}>
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
