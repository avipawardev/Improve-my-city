import React, { useRef, useEffect } from "react";

const Map = ({ onLoad, ...props }) => {
  const mapRef = useRef();
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Create map when component mounts and DOM element is ready
    const createMap = () => {
      if (mapRef.current && window.google && !mapInstanceRef.current) {
        const map = new window.google.maps.Map(mapRef.current, props);
        mapInstanceRef.current = map;
        onLoad?.(map);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(createMap, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (mapInstanceRef.current) {
        // Clear all event listeners to prevent memory leaks
        try {
          google.maps.event.clearInstanceListeners(mapInstanceRef.current);
        } catch (error) {
          // Ignore cleanup errors
        }
        mapInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array - only run on mount/unmount

  // Update map properties when they change
  useEffect(() => {
    if (mapInstanceRef.current) {
      try {
        if (
          props.center &&
          (Math.abs(
            props.center.lat - mapInstanceRef.current.getCenter().lat()
          ) > 0.0001 ||
            Math.abs(
              props.center.lng - mapInstanceRef.current.getCenter().lng()
            ) > 0.0001)
        ) {
          mapInstanceRef.current.setCenter(props.center);
        }
        if (props.zoom && props.zoom !== mapInstanceRef.current.getZoom()) {
          mapInstanceRef.current.setZoom(props.zoom);
        }
      } catch (error) {
        // Ignore errors that might occur during map property updates
        console.warn("Error updating map properties:", error);
      }
    }
  }, [props.center, props.zoom]);

  return <div ref={mapRef} style={props.style} />;
};

export default Map;
