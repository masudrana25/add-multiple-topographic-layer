import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';

const MapWithPolygon = () => {
  const geoJSONData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-73.981894, 40.768092],
              [-73.982932, 40.76587],
              [-73.979156, 40.765607],
              [-73.978358, 40.768143],
              [-73.981894, 40.768092],
            ],
          ],
        },
      },
    ],
  };

  return (
    <MapContainer center={[40.767272, -73.971526]} zoom={15} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoJSONData.features.map((feature, index) => (
        <Polygon key={index} positions={feature.geometry.coordinates[0]} />
      ))}
    </MapContainer>
  );
};

export default MapWithPolygon;
