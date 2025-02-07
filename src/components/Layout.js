import React, { useContext } from 'react';
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

const Layout = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>

      <li className="nav-item">
        <Link to="/about" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </li>
      {user&&(
        <>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">User Dashboard</Link>
            </li>

           <li className="nav-item">
            <Link to="/insights" className="nav-link">Insights</Link>
            </li>
        </>
       
      )}
      
    </ul>

    {/* Right-aligned profile section */}
    {user && (
      <ul className="navbar-nav ms-auto"> {/* Pushes it to the right */}
       

        <li className="nav-item dropdown">
          {/* Use <a> instead of <Link> for dropdown toggle */}
          <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Profile</p>
          <ul className="dropdown-menu dropdown-menu-end"> {/* Aligns dropdown to the right */}
            <li>
              <p className="dropdown-item">Name: {user.name}</p>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => logout()}>Logout</button>
            </li>
          </ul>
        </li>
      </ul>
    )}

    {!user && (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login/Register</Link>
        </li>
      </ul>
    )}
  </div>
</nav>
      <Outlet />
    </>
  );
};

export default Layout;
