import { LayerGroup, Polyline } from "react-leaflet";
import neighbordhoodCoordinates from "../../scripts/fortaleza_scripts/neighborhoodCoordinates2.json";

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
