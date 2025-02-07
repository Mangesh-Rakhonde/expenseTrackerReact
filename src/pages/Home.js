import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5 mb-5 text-center">
      <h2 className="mb-3">💰 Welcome to Expense Tracker</h2>
      <p className="lead">
        Easily track your expenses, manage your budget, and gain financial insights.
      </p>

      {/* Navigation Links */}
      <div className="mt-4">
        <Link to="/login" className="btn btn-primary mx-2">Login</Link>
        <Link to="/register" className="btn btn-success mx-2">Register</Link>
        <Link to="/dashboard" className="btn btn-info mx-2">Go to Dashboard</Link>
      </div>

      {/* App Features Section */}
      <div className="card mt-5 p-4 shadow-sm">
        <h4>🚀 Features</h4>
        <ul className="list-group text-start">
          <li className="list-group-item">📊 Track your daily expenses</li>
          <li className="list-group-item">💡 Set budget goals</li>
          <li className="list-group-item">📅 View monthly insights</li>
          <li className="list-group-item">🔒 Secure & easy to use</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
