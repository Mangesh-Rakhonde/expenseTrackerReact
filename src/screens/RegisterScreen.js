import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../apiClient';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user={name,email,password};
    try{
      apiClient.post('/api/users/register',user);
    }
    catch(err){
      console.error('Failed to register',err);
      // Display error message to user or handle accordingly
      // For example, display error message below the form inputs or show a global error message
      return;  // Prevent form from submitting and causing an error to be thrown again
    }
    
    // Registration API call
    // If success, navigate to login or dashboard
    <h4>Registration successful.</h4>
    navigate('/login');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "500px" }}>
        <h3 className="text-center">Register</h3>
      <form onSubmit={handleSubmit}>
      <input
      className='form-control mt-3 mb-3'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>setName(e.target.value)}
          required
        />
        <input
        className='form-control mt-3 mb-3'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
        className='form-control mt-3 mb-5'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='btn btn-primary'>Register</button>
      </form>
      <p className='mt-3'>Already have an account? <a href='/login'>Login</a></p>
    </div>
  </div>
  );
};

export default RegisterScreen;
