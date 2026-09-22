import { Popup } from "./popup";

import neighbordhoodCoordinates from "../../scripts/fortaleza_scripts/neighborhoodCoordinates2.json";
import { LayerGroup, Polygon } from "react-leaflet";
import type { NeighborhoodPolygonButtonProps } from "../utils/weather-types";

import { getWeatherNeighborhood } from "@/utils/search-neighborhood-weather-consult";
import { useState } from "react";

export function NeighborhoodPolygonButton({
  click: setResponse,
  setNeighborhoodName: setNeighborhoodName,
}: NeighborhoodPolygonButtonProps) {
  const [hoveredNeighborhood, setHoveredNeighborhood] = useState<any | null>(
    null,
  );

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
                  const promise = await getWeatherNeighborhood(neighborhood);

                  if (promise) {
                    setResponse(promise);
                    setNeighborhoodName(neighborhood);
                  }
                  console.log(neighborhood);
                },
                mouseover: () => {
                  setHoveredNeighborhood(<Popup neighborhood={neighborhood} />);
                },

                mouseout: () => {
                  const currentNeighboorhood: string = neighborhood;
                  if (currentNeighboorhood != neighborhood) {
                    return setHoveredNeighborhood(null);
                  }
                },
              }}
            />
          );
        },
      )}
      {hoveredNeighborhood}
    </LayerGroup>
  );
}
