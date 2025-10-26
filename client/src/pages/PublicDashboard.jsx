import React, { useState, useEffect, useCallback, useRef } from "react";
import axiosInstance from "../api/axiosInstance";
import Navbar from "../components/Navbar";
import ComplaintCard from "../components/ComplaintCard";
import Map from "../components/Map";
import { useGoogleMapsScript } from "../hooks/useGoogleMapsScript";

const PublicDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [map, setMap] = useState(null);
  const scriptLoaded = useGoogleMapsScript(
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  );

  useEffect(() => {
    fetchResolvedComplaints();
  }, []);

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
      const res = await axiosInstance.get("/complaints"); // Public endpoint shows resolved
      setComplaints(res.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
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
