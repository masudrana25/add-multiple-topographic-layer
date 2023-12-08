// Import necessary modules
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import geoData from './Plan01ContourBandPolygons_Fe.json';

// Example component
const WaterResourcesMap = () => {



  return (
    <MapContainer center={[40.767272, -73.981526]}
        zoom={15}
        scrollWheelZoom={false}
      style={{ width: '1000px', height: '800px' }}>
      
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <GeoJSON data={geoData.features} />

    </MapContainer>
  );
};

export default WaterResourcesMap;

