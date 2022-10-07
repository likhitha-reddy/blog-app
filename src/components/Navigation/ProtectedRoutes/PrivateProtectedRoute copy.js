import React from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import { Navigate, Outlet } from 'react-router-dom';

const PrivateProtectRoute = () => {
  //check if user is loggin
  const user = useSelector(state => state?.users);
  const { userAuth } = user;
  return userAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateProtectRoute;
