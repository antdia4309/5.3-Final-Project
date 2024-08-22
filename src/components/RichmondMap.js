import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import map_icon from './map_icon.png';
import './RichmondMap.css';

function RichmondMap() {
  const position = [37.5407, -77.4360];

  const customIcon = L.icon({
    iconUrl: map_icon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  return (
    <div className="richmond-map-container">
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Richmond, VA <br /> The capital of Virginia. <br /> <a href="https://en.wikipedia.org/wiki/Richmond,_Virginia" target="_blank" rel="noopener noreferrer">Learn more</a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default RichmondMap;
