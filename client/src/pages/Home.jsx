import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Improve My City</h1>
          <p className="text-lg text-gray-600">Report civic issues and track their resolution</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Report an Issue</h2>
            <p className="text-gray-600 mb-4">Submit complaints about roads, sanitation, electricity, and more.</p>
            <Link to="/report" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Report Now</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Track Complaints</h2>
            <p className="text-gray-600 mb-4">Check the status of your submitted complaints.</p>
            <Link to="/my-complaints" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Complaints</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Public Dashboard</h2>
            <p className="text-gray-600 mb-4">View resolved issues on the map.</p>
            <Link to="/public" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Map</Link>
          </div>
        </div>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;