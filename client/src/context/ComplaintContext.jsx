import React, { createContext, useState, useContext } from 'react';
import axiosInstance from '../api/axiosInstance';
import AuthContext from './AuthContext';

const ComplaintContext = createContext();

export const ComplaintProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const fetchComplaints = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get('/complaints');
      setComplaints(res.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    } finally {
      setLoading(false);
    }
  };

  const createComplaint = async (complaintData) => {
    const res = await axiosInstance.post('/complaints', complaintData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    setComplaints([res.data, ...complaints]);
    return res.data;
  };

  const updateComplaint = async (id, updates) => {
    const res = await axiosInstance.put(`/complaints/${id}`, updates);
    setComplaints(complaints.map(c => c._id === id ? res.data : c));
    return res.data;
  };

  return (
    <ComplaintContext.Provider value={{
      complaints,
      loading,
      fetchComplaints,
      createComplaint,
      updateComplaint,
    }}>
      {children}
    </ComplaintContext.Provider>
  );
};

export default ComplaintContext;