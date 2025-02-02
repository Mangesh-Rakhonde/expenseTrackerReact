import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // If there is no current user, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If there is a user, render the child components
  return children ? children : <Outlet />;
};

export default ProtectedRoute;