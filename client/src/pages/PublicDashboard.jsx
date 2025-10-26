import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import Navbar from '../components/Navbar';
import ComplaintCard from '../components/ComplaintCard';

const PublicDashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchResolvedComplaints();
  }, []);

  const fetchResolvedComplaints = async () => {
    try {
      const res = await axiosInstance.get('/complaints'); // Public endpoint shows resolved
      setComplaints(res.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Resolved Issues</h2>
        {complaints.length === 0 ? (
          <p>No resolved complaints found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaints.map(complaint => (
              <ComplaintCard key={complaint._id} complaint={complaint} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicDashboard;