import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import type { WeatherData } from "../utils/weather-types.ts";
import "../../styles/card_weather.css";
import "../../styles/cloud.css";

type parameterStatusCard = {
  weather: WeatherData | null;
  neiborhood: string | undefined;
};

export function WeatherStatusCard({
  weather,
  neiborhood,
}: parameterStatusCard) {
  if (weather) {
    const aparentTemperature: number = weather.apparentTemperature;
    const weatherHumidty: number = weather.humidity;
    const temperature: number = weather.temperature;
    const wind: number = weather.wind;
    return (
      <div className="weather-card-content">
        <Card id="WeatherCard" className="flex gap-0 min-h-153">
          <CardTitle className="text-center">{neiborhood}</CardTitle>
          <CardContent className="flex-col" id="WeatherCardContent">
            <Label className="text-[1.5rem]">
              <p>Temperatura:</p>
              {temperature.toPrecision(2) + `°`}
            </Label>
            <Label className="text-[1.5rem]">
              <p>Sensação termica:</p>
              {aparentTemperature.toPrecision(2) + `°`}
            </Label>
            <Label className="text-[1.5rem]">
              <p>Humidade do ar:</p>
              {weatherHumidty.toPrecision(2)}
            </Label>
            <Label className="text-[1.5rem]">
              <p>Velocidade do vento:</p>
              {wind.toPrecision(2)}
            </Label>
          </CardContent>
        </Card>
      </div>
    );
  }
}
