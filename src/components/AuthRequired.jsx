import React from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";

const AuthRequired = () => {
  const authenticated = false;
  if (!authenticated) {
    return (
      <Navigate to="/login" state={{ message: "You need to log in first." }} />
    );
  }
  return <Outlet />;
};

export default AuthRequired;
