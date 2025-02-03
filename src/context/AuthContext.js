import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import apiClient from '../apiClient';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      apiClient.get('/auth/me')
        .then(response => {
          setUser(response.data.user);
        })
        .catch(() => Cookies.remove('authToken'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try{
      const response = await apiClient.post('/api/users/login', { email, password });
      const { token,user } = response.data;
        //logs
      Cookies.set('authToken', token, { expires: 7 });
      if(user){
        setUser(user);
        return true;
      }
      else{
        return false;
      }     
    
    }
    catch(error){
      console.log(error);
    }
    
  };

  const register = async (username,email, password) => {
    const response = await apiClient.post('/api/users/register', { username,email, password });
    const { token, user } = response.data;
    Cookies.set('authToken', token, { expires: 7 });
    setUser(user);
  };

  const logout = () => {
    Cookies.remove('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
