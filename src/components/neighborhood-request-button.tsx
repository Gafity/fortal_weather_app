import type { WeatherData } from "../utils/interfaces";
import neighbordhoodCoordinates from "../../scripts/fortaleza_scripts/neighborhoodCoordinates2.json";
import type { Dispatch, SetStateAction } from "react";
import { LayerGroup, Polygon } from "react-leaflet";
import { searchNeighborhoodWeather } from "@/utils/search-neighborhood-weather-consult";

export function NeighborhoodButton({
  click: setResponse,
}: {
  click: Dispatch<SetStateAction<WeatherData | null>>;
}) {
  return (
    <LayerGroup>
      {Object.entries(neighbordhoodCoordinates).flatMap(
        ([neighborhood, coordinates], idx) => {
          const neighborhoodCoordinates = coordinates.flat(1);
          return (
            <Polygon
              key={`${neighborhood}-${idx}`}
              pathOptions={{ fillOpacity: 0, color: "transparent" }}
              positions={neighborhoodCoordinates as any}
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
