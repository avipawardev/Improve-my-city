import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import Navbar from '../components/Navbar';
import StatusBadge from '../components/StatusBadge';

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchComplaints();
    fetchStats();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axiosInstance.get('/admin/complaints');
      setComplaints(res.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await axiosInstance.get('/admin/stats');
      setStats(res.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axiosInstance.put(`/admin/complaints/${id}/status`, { status });
      fetchComplaints();
    } catch (error) {
      alert('Failed to update status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Total Complaints</h3>
            <p className="text-2xl">{stats.totalComplaints || 0}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Pending</h3>
            <p className="text-2xl">{stats.pendingComplaints || 0}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">In Progress</h3>
            <p className="text-2xl">{stats.inProgressComplaints || 0}</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Resolved</h3>
            <p className="text-2xl">{stats.resolvedComplaints || 0}</p>
          </div>
        </div>

        {/* Complaints Table */}
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">User</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map(complaint => (
                <tr key={complaint._id} className="border-t">
                  <td className="p-4">{complaint.title}</td>
                  <td className="p-4">{complaint.user.name}</td>
                  <td className="p-4">
                    <StatusBadge status={complaint.status} />
                  </td>
                  <td className="p-4">
                    <select
                      value={complaint.status}
                      onChange={(e) => updateStatus(complaint._id, e.target.value)}
                      className="p-1 border rounded"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;