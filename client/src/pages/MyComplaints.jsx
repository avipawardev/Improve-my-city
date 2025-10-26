import React, { useContext, useEffect } from 'react';
import ComplaintContext from '../context/ComplaintContext';
import Navbar from '../components/Navbar';
import ComplaintCard from '../components/ComplaintCard';

const MyComplaints = () => {
  const { complaints, loading, fetchComplaints } = useContext(ComplaintContext);

  useEffect(() => {
    fetchComplaints();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">My Complaints</h2>
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