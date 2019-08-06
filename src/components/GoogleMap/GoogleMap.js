import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapContainer = withGoogleMap(({ onMapClick, marker, zoom }) => {
  let lat = 32.08751958472376;
  let lng = 34.77928161621094;

  if (marker && marker.position) {
    lat = marker.position.lat;
    lng = marker.position.lng;
  }

  return (
    <GoogleMap
      defaultZoom={zoom}
      defaultCenter={{ lat, lng }}
      onClick={onMapClick}
    >
      <Marker {...marker} />
    </GoogleMap>
  );
});

const GoogleMapContainer = ({ onMapClick, marker, zoom }) => {
  return (
    <MapContainer
      onMapClick={onMapClick}
      marker={marker}
      containerElement={<div style={{ height: `100%`, width: "100%" }} />}
      mapElement={<div style={{ height: `100%`, width: "100%" }} />}
      zoom={zoom || 8}
    />
  );
};

export default GoogleMapContainer;
