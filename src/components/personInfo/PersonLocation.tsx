import { FunctionComponent } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

type Props = {
  position: [number, number];
};

export const PersonLocation: FunctionComponent<Props> = ({ position }) => {
  return (
    <div>
      <MapContainer className="person-loacation" center={position} zoom={3} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};
