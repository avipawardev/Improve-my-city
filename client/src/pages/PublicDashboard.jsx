import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Navbar from "../components/Navbar";
import ComplaintCard from "../components/ComplaintCard";
import Map from "../components/Map";
import { useGoogleMapsScript } from "../hooks/useGoogleMapsScript";

const PublicDashboard = () => {
  const [searchParams] = useSearchParams();
  const [complaints, setComplaints] = useState([]);
  const [map, setMap] = useState(null);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState('');
  const scriptLoaded = useGoogleMapsScript(
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  );

  useEffect(() => {
    fetchResolvedComplaints();
  }, []);

  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearch(urlSearch);
      fetchResolvedComplaints();
    }
  }, [searchParams]);

  // Add markers when complaints or map changes
  useEffect(() => {
    if (map && complaints.length > 0) {
      // Clear existing markers first
      // Note: In a real app, you'd want to keep track of markers to clear them

      // Add markers for resolved complaints
      complaints.forEach((complaint) => {
        if (
          complaint.location &&
          complaint.location.latitude &&
          complaint.location.longitude
        ) {
          const marker = new google.maps.Marker({
            position: {
              lat: complaint.location.latitude,
              lng: complaint.location.longitude,
            },
            map: map,
            title: complaint.title,
          });

          // Add info window
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div>
                <h3>${complaint.title}</h3>
                <p>${complaint.description}</p>
                <p>Status: ${complaint.status}</p>
              </div>
            `,
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        }
      });
    }
  }, [map, complaints]);

  const onMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const fetchResolvedComplaints = async () => {
    try {
      const params = {};
      if (search) params.search = search;
      if (category) params.category = category;
      const res = await axiosInstance.get("/complaints", { params });
      setComplaints(res.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  const handleSearch = () => {
    fetchResolvedComplaints();
  };

  if (!scriptLoaded) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-8">
          <h2 className="text-2xl font-bold mb-6">Resolved Issues Map</h2>
          <div className="mb-8">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div>Loading map...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Resolved Issues Map</h2>

        <div className="bg-white p-4 rounded shadow mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search resolved issues..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 p-2 border rounded"
          />
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

        <div className="mb-8">
          <Map
            center={{ lat: 40.7128, lng: -74.006 }} // Default to NYC
            zoom={10}
            style={{ height: "500px", width: "100%" }}
            onLoad={onMapLoad}
          />
        </div>

        <h3 className="text-xl font-semibold mb-4">Resolved Complaints</h3>
        {complaints.length === 0 ? (
          <p>No resolved complaints found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaints.map((complaint) => (
              <ComplaintCard key={complaint._id} complaint={complaint} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicDashboard;
