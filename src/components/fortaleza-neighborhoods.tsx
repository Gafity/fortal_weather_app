import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { NeighborhoodPolylinesLayer } from "./neighborhood-polylines-layer.tsx";
import { NeighborhoodPolygonButton } from "@/components/neighborhood-request-button.tsx";
import "../../styles/index.css";
import { FORTAL_CENTER_POSITION } from "@/utils/coordinatesByNeighborhood.ts";

import { useState } from "react";
import type { WeatherData } from "@/utils/weather-types.ts";

import { WeatherStatusCard } from "@/components/weather-status-card.tsx";

export const FortalezaNeighborhoods = () => {
  const [weatherDataResponse, setWeatherDataResponse] =
    useState<WeatherData | null>(null);
  const [neighborhoodName, setNeighborhoodName] = useState<string>("");

  return (
    <div
      id="fortaleza"
      className="min-h-screen flex items-center justify-center gap-4"
    >
      <MapContainer
        center={FORTAL_CENTER_POSITION}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: 610, width: 800 }}
        className="relative p-8 z-10 items-center justify-center"
      >
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        />

        <NeighborhoodPolylinesLayer />

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
