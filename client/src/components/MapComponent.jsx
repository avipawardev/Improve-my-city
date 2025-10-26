import React, { useState, useCallback, useRef, useEffect } from "react";
import Map from "./Map";
import { useGoogleMapsScript } from "../hooks/useGoogleMapsScript";

const MapComponent = ({ onLocationSelect, initialLocation }) => {
  const [map, setMap] = useState(null);
  const markerRef = useRef(null);
  const scriptLoaded = useGoogleMapsScript(
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  );

  const onMapLoad = useCallback(
    (mapInstance) => {
      setMap(mapInstance);

      // Add click listener to place marker
      mapInstance.addListener("click", (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        // Remove existing marker
        if (markerRef.current) {
          markerRef.current.setMap(null);
        }

        // Create new marker
        const newMarker = new google.maps.Marker({
          position: { lat, lng },
          map: mapInstance,
        });

        markerRef.current = newMarker;

        // Call callback with location
        onLocationSelect({ lat, lng });
      });

      // Set initial marker if provided
      if (initialLocation) {
        const newMarker = new google.maps.Marker({
          position: initialLocation,
          map: mapInstance,
        });
        markerRef.current = newMarker;
      }
    },
    [onLocationSelect, initialLocation]
  );

  if (!scriptLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <Map
      center={{ lat: 40.7128, lng: -74.006 }} // Default to NYC
      zoom={10}
      style={{ height: "400px", width: "100%" }}
      onLoad={onMapLoad}
    />
  );
};

export default MapComponent;
