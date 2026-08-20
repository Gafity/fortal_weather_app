import { weatherConsult } from "@/request";

export async function searchNeighorhoodWeather(nameNeighborhood: string) {
  switch (nameNeighborhood) {
    case "Messejana":
      const coordinates: Record<string, string> = {
        latitude: "-3.738639",
        longitude: "-38.535288",
      };
      return await weatherConsult(coordinates);

    default:
      console.log("No option selected");
      alert("No data yet");
  }
}
