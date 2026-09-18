// nomes do arquivo não está bom
// pesquisar o que é interface no ts
//
export interface WeatherApiResponse {
  latitude: number;
  longitude: number;

  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    apparent_temperature: number;
  };
}

export interface WeatherData {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  wind: number;
}
