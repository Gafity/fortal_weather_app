import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import {
  NeighborhoodPolyline,
  ClickableNeighborhoodPolygon,
} from "../utils/neighborhood_polyline.tsx";

import { useState } from "react";
import type { WeatherData } from "@/utils/interfaces.ts";

import { WeatherStatusCard } from "@/components/weather-status-card.tsx";

const FORTALPOSITION: LatLngExpression = [-3.795, -38.5266];

export const Fortaleza = () => {
  const [response, setResponse] = useState<WeatherData | null>(null);
  return (
    <div
      id="fortaleza"
      className="min-h-screen flex items-center justify-center gap-4"
    >
      <MapContainer
        center={FORTALPOSITION}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: 610, width: 800 }}
        className="relative p-8 z-10 items-center justify-center"
      >
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker
          position={FORTALPOSITION}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <NeighborhoodPolyline />

        <ClickableNeighborhoodPolygon setResponse={setResponse} />
      </MapContainer>
      <WeatherStatusCard weather={response} />
    </div>
  );
};
