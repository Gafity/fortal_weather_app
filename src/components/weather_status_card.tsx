import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import type { WeatherApiResponse, WeatherData } from "@/utils/inferfaces";

export function WeatherStatusCard({
  weather,
}: {
  weather: WeatherData | null;
}) {
  if (weather) {
    return (
      <div>
        <Card>
          <CardContent>
            <Label>{weather.apparentTemperature}</Label>
            <Label>{weather.humidity}</Label>
            <Label>{weather.temperature}</Label>
            <Label>{weather.wind}</Label>
          </CardContent>
        </Card>
      </div>
    );
  }
}
