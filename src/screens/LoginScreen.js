import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate('/'); // Redirect to home if login is successful
    }
    else{
        console.log('something happen while login');
    }
  };

  return (
    <div className='container pt-5 pb-5 mt-5 border'>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-3">
      <label className="form-label">Email</label>
        <input
          className='form-control'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>

        <div className="mb-3 mt-3">
        <label className="form-label">Password</label>
        <input
        className='form-control'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        <button type="submit" className='btn btn-primary'>Login</button>
      </form>
      <p className='mt-3'>Don't have an account? <a href='/register'>Register here</a></p>
    </div>
  );
};

export default LoginScreen;
