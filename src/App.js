// Import necessary modules
import React from 'react';
import { MapContainer, TileLayer, GeoJSON, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Example component
const WaterResourcesMap = () => {

  return (
    <MapContainer center={[23.726215, 90.3902]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ width: '1000px', height: '800px' }}>
      <LayersControl position="topright">
        {/* Base Map Layer */}
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
        </TileLayer>
        </LayersControl.BaseLayer>

        {/* GIS Data Layers */}
        <LayersControl.Overlay name="Land Cover">
          <TileLayer
            attribution='Stamen Terrain Background'
            url="https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}{r}.png">
        </TileLayer>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="World_Street_Map">
         <TileLayer
            attribution='World_Street_Map'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}">
        </TileLayer>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="landscape">
          <TileLayer
            attribution='landscape'
            url="https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png">
        </TileLayer>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default WaterResourcesMap;
