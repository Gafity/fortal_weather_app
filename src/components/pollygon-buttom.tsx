import { Polygon } from "react-leaflet";
import { polygonNeiborhoodButtom } from "@/utils/order-coordinates-of-polygon-buttom";

import { useState } from "react";

import { Popup } from "./popup";

import { getWeatherNeighborhood } from "@/utils/search-neighborhood-weather-consult";
import type { NeighborhoodPolygonButtonProps } from "@/utils/weather-types";

export function PolygonButtom({
  setResponse: setResponse,
  setNeighborhoodName: setNeighborhoodName,
}: NeighborhoodPolygonButtonProps) {
  const [hoveredNeighborhood, setHoveredNeighborhood] = useState<any | null>(
    null,
  );

  const [selectedNeighborhood, setSelectedNeighborhood] = useState<
    string | null
  >(null);
  return (
    <>
      {Object.entries(polygonNeiborhoodButtom).map(([key, item]) => {
        return (
          <Polygon
            key={item.id}
            positions={item.coordinates as any}
            pathOptions={{
              color: selectedNeighborhood === key ? "purple" : "transparent",
              fillOpacity: selectedNeighborhood === key ? 0.7 : 0,
            }}
            eventHandlers={{
              click: async () => {
                const promise = await getWeatherNeighborhood(key);

                if (promise) {
                  setResponse(promise);
                  setNeighborhoodName(key);
                }

                setSelectedNeighborhood((prev) => (prev === key ? null : key));
              },
              mouseover: () => {
                setHoveredNeighborhood(<Popup neighborhood={key} />);
              },
            }}
          />
        );
      })}
      {hoveredNeighborhood}
    </>
  );
}
