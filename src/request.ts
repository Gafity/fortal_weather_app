import { apiUrl } from "./utils/settins";
import type { WeatherApiResponse, WeatherData } from "./utils/inferfaces";

export async function weatherConsult(
  coordinates: Record<string, string>,
): Promise<WeatherData> {
  try {
    const queryString = new URLSearchParams(coordinates).toString();

    const response = await fetch(apiUrl + `/weather/fortal/?${queryString}`);

    const weatherResponsePromise: WeatherApiResponse = await response.json();

    const dataWeather: WeatherData = {
      temperature: weatherResponsePromise.current.temperature_2m,
      apparentTemperature: weatherResponsePromise.current.apparent_temperature,
      humidity: weatherResponsePromise.current.relative_humidity_2m,
      wind: weatherResponsePromise.current.wind_speed_10m,
    };

    return dataWeather;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    throw error;
  }
}
