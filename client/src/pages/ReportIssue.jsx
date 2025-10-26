import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ComplaintContext from '../context/ComplaintContext';
import Navbar from '../components/Navbar';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Other',
    location: '',
    images: null,
  });
  const { createComplaint } = useContext(ComplaintContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    
    if (formData.location) {
      data.append('location', JSON.stringify({ address: formData.location }));
    }
    
    if (formData.images) {
      for (let i = 0; i < formData.images.length; i++) {
        data.append('images', formData.images[i]);
      }
    }
    
    try {
      await createComplaint(data);
      navigate('/my-complaints');
    } catch (error) {
      alert('Failed to report issue: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Report an Issue</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Roads">Roads</option>
                <option value="Sanitation">Sanitation</option>
                <option value="Water">Water</option>
                <option value="Electricity">Electricity</option>
                <option value="Public Safety">Public Safety</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Location (Address)</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Images</label>
              <input
                type="file"
                name="images"
                onChange={handleChange}
                multiple
                accept="image/*"
                className="w-full p-2 border rounded"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;