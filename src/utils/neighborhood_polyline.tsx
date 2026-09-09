import { LayerGroup, Polygon, Polyline } from "react-leaflet";
import neighbordhoodCoordinates from "../../scripts/fortaleza_scripts/neighborhoodCoordinates2.json";
import type { Dispatch, SetStateAction } from "react";
import { searchNeighborhoodWeather } from "./request";
import type { WeatherData } from "./interfaces";

export function NeighborhoodPolyline() {
  return (
    <LayerGroup>
      {Object.entries(neighbordhoodCoordinates).flatMap(
        ([neighborhood, coordinates], idx) => {
          return (
            <Polyline
              key={`${neighborhood}-${idx}`}
              positions={coordinates as any}
            />
          );
        },
      )}
    </LayerGroup>
  );
}

export function ClickableNeighborhoodPolygon({
  setResponse,
}: {
  setResponse: Dispatch<SetStateAction<WeatherData | null>>;
}) {
  return (
    <LayerGroup>
      {Object.entries(neighbordhoodCoordinates).flatMap(
        ([neighborhood, coordinates], idx) => {
          const listCoordinates = coordinates.flat(1);
          return (
            <Polygon
              key={`${neighborhood}-${idx}`}
              pathOptions={{ fillOpacity: 0, color: "transparent" }}
              positions={listCoordinates as any}
              eventHandlers={{
                click: async () => {
                  const promise = await searchNeighborhoodWeather(neighborhood);
                  if (promise) {
                    setResponse(promise);
                  }
                  console.log(neighborhood);
                },
              }}
            />
          );
        },
      )}
    </LayerGroup>
  );
}
