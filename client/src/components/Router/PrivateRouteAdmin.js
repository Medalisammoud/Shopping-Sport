import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
const user = useSelector(state => state.userReducer.user)
  if (token && user.role===1) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/" />;
};

export default PrivateRouteAdmin;