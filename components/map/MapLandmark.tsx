"use client";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

type LatLng = [number, number];
type LocationMarkerProps = {
  position: LatLng | null;
  setPosition: (position: LatLng) => void;
};

function LocationMarker({ position, setPosition }: LocationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      const newLocation: LatLng = [e.latlng.lat, e.latlng.lng];
      setPosition(newLocation);
      map.flyTo(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>This is your location.</Popup>
    </Marker>
  );
}

const MapLandmark = ({
  Location,
}: {
  Location?: { lat: number; lng: number };
}) => {
  const defaultLocation: LatLng = [13.7442, 100.4608];
  const [position, setPosition] = useState<LatLng | null>(null);
  console.log(position);

  return (
    <>
      <h1 className="mt-4 font-semibold"></h1>
      <input type="hidden" name="lat" value={position ? position[0] : ""} />
      <input type="hidden" name="lng" value={position ? position[1] : ""} />
      <MapContainer
        className="h-[50vh] z-0 relative mb-2"
        center={Location || defaultLocation}
        zoom={9}
        scrollWheelZoom={false}
      >
        {!position ? (
          <Marker position={Location || defaultLocation} icon={markerIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ) : null}

        <LocationMarker position={position} setPosition={setPosition} />

        <LayersControl>
          <LayersControl.BaseLayer name="Voyager" checked>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};
export default MapLandmark;
