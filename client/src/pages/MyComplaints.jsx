import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ComplaintCard from '../components/ComplaintCard';
import axiosInstance from '../api/axiosInstance';

const MyComplaints = () => {
  const [searchParams] = useSearchParams();
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaints();
  }, []);

  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearch(urlSearch);
      fetchComplaints();
    }
  }, [searchParams]);

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const params = {};
      if (search) params.search = search;
      if (status) params.status = status;
      if (category) params.category = category;
      const res = await axiosInstance.get('/complaints', { params });
      setComplaints(res.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchComplaints();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">My Complaints</h2>
        
        <div className="bg-white p-4 rounded shadow mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search complaints..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 p-2 border rounded"
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="p-2 border rounded">
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded">
            <option value="">All Categories</option>
            <option value="Roads">Roads</option>
            <option value="Water">Water</option>
            <option value="Electricity">Electricity</option>
            <option value="Sanitation">Sanitation</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={handleSearch} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Search
          </button>
        </div>

        {complaints.length === 0 ? (
          <p>No complaints found.</p>
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

export default MyComplaints;