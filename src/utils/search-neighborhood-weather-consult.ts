import { consultNeighborhoodWeather } from "@/utils/request-weather-api";
import { getNeighborhoodCoordinates } from "./coordinatesByNeighborhood";

function parseNeighborhoodCoordinatesToString(neighborhood: string): {
  [key: string]: string;
} {
  const neighborhoodLatLng: number[] = getNeighborhoodCoordinates(
    neighborhood,
  ) as number[];
  const neighborhoodString = {
    latitude: neighborhoodLatLng[0]!.toString(),
    longitude: neighborhoodLatLng[1]!.toString(),
  };

  return neighborhoodString;
}

export async function getWeatherNeighborhood(neighborhood: string) {
  const neighborhoodCoordinates =
    parseNeighborhoodCoordinatesToString(neighborhood);

  try {
    return await consultNeighborhoodWeather(neighborhoodCoordinates);
  } catch {
    alert("No data yet.");
  }
}
