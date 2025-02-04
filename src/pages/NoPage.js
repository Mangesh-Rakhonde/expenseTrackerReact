import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">Sorry, the page you're looking for doesn't exist.</p>
      
      <div className="mt-4">
        <Link to="/" className="btn btn-primary">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default NoPage;
