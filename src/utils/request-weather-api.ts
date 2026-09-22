import { apiUrl } from "./check-api";
import type { WeatherApiResponse, WeatherData } from "./weather-types";

export async function consultNeighborhoodWeather(
  coordinates: Record<string, string>,
): Promise<WeatherData> {
  try {
    const coordinatesToQueryString = new URLSearchParams(
      coordinates,
    ).toString();

    const response = await fetch(
      apiUrl + `/weather/fortal/?${coordinatesToQueryString}`,
    );

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
