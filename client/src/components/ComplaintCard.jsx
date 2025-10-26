import React from 'react';

const ComplaintCard = ({ complaint }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Resolved': return 'bg-green-500';
      case 'Rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold">{complaint.title}</h3>
      <p className="text-gray-600">{complaint.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className={`px-2 py-1 rounded text-white text-sm ${getStatusColor(complaint.status)}`}>
          {complaint.status}
        </span>
        <span className="text-sm text-gray-500">
          {new Date(complaint.createdAt).toLocaleDateString()}
        </span>
      </div>
      {complaint.images && complaint.images.length > 0 && (
        <img src={complaint.images[0]} alt="Complaint" className="w-full h-32 object-cover mt-2 rounded" />
      )}
    </div>
  );
};

export default ComplaintCard;