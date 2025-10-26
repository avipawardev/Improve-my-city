import { useState, useEffect } from "react";

export const useGoogleMapsScript = (apiKey) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (window.google) {
      setScriptLoaded(true);
      return;
    }

    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com"]'
    );
    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        setScriptLoaded(true);
      } else {
        const checkLoaded = () => {
          if (window.google) {
            existingScript.dataset.loaded = "true";
            setScriptLoaded(true);
          } else {
            setTimeout(checkLoaded, 100);
          }
        };
        checkLoaded();
      }
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.dataset.loaded = "false";

    script.onload = () => {
      script.dataset.loaded = "true";
      setScriptLoaded(true);
    };

    script.onerror = () => {
      console.error("Failed to load Google Maps script");
    };

    document.head.appendChild(script);

    return () => {
      // Don't remove the script to avoid reloading
    };
  }, [apiKey]);

  return scriptLoaded;
};
