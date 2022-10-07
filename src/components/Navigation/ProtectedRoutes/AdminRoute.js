import React from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  //check if user is loggin
  const user = useSelector(state => state?.users);
  const { userAuth } = user;
  return userAuth?.isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
