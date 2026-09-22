import { Popup as PopupLeafleat } from "react-leaflet";
import { getNeighborhoodCoordinates } from "@/utils/coordinatesByNeighborhood";

export function Popup({ neighborhood }: { neighborhood: string }) {
  return (
    <PopupLeafleat position={getNeighborhoodCoordinates(neighborhood)}>
      {neighborhood}
    </PopupLeafleat>
  );
}
