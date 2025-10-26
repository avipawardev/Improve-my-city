import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Verify token and get user
      axiosInstance.get('/auth/profile')
        .then(res => setUser(res.data))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const res = await axiosInstance.post('/auth/login', { email, password });
    setUser(res.data);
    localStorage.setItem('token', res.data.token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
  };

  const register = async (name, email, password) => {
    const res = await axiosInstance.post('/auth/register', { name, email, password });
    setUser(res.data);
    localStorage.setItem('token', res.data.token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    delete axiosInstance.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;