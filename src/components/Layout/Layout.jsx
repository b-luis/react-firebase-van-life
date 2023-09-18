import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      {/** parang children  */}
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
