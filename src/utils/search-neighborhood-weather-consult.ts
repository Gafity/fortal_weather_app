import { weatherConsult as NeighborhoodWeatherConsult } from "@/utils/request-weather-api";

export async function searchNeighborhoodWeather(nameNeighborhood: string) {
  switch (nameNeighborhood) {
    case "Messejana":
      const coordinates: { [coordinates: string]: string } = {
        latitude: "-3.738639",
        longitude: "-38.535288",
      };
      return await NeighborhoodWeatherConsult(coordinates);

    default:
      console.log("No option selected");
      alert("No data yet");
  }
}
