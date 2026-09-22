import { MapContainer, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { NeighborhoodPolyline } from "../components/neighborhood-polyline.tsx";
import { NeighborhoodPolygonButton } from "@/components/neighborhood-request-button.tsx";
import "../../styles/index.css";

import { useState } from "react";
import type { WeatherData } from "@/utils/weather-types.ts";

import { WeatherStatusCard } from "@/components/weather-status-card.tsx";

const FORTALPOSITION: LatLngExpression = [-3.795, -38.5266];

export const FortalezaNeighborhood = () => {
  const [weatherDataResponse, setWeatherDataResponse] =
    useState<WeatherData | null>(null);
  const [neighborhoodName, setNeighborhoodName] = useState<string>();
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

        <NeighborhoodPolyline />

        <NeighborhoodPolygonButton
          click={setWeatherDataResponse}
          setNeighborhoodName={setNeighborhoodName}
        />
      </MapContainer>
      <WeatherStatusCard
        weather={weatherDataResponse}
        neiborhood={neighborhoodName}
      />
    </div>
  );
};
