import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../authprovider/AuthProvider";

const AuthProtected = ({ children }) => {
  const userAuth = useCreateAuthStateContext();

  if (!userAuth) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default AuthProtected;
