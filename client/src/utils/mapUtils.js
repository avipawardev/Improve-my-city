// Google Maps utilities

export const initMap = (element, center, zoom = 15) => {
  if (!window.google) return null;

  return new window.google.maps.Map(element, {
    center,
    zoom,
  });
};

export const addMarker = (map, position, title) => {
  if (!window.google || !map) return null;

  return new window.google.maps.Marker({
    position,
    map,
    title,
  });
};

export const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    if (!window.google) reject('Google Maps not loaded');

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        resolve(results[0].geometry.location);
      } else {
        reject(status);
      }
    });
  });
};