import { Button as ButtonUI } from "./ui/button";
import { weatherConsult } from "../utils/request-weather-api";

export function Button({
  message,
  coordinates,
}: {
  message?: string;
  coordinates: Record<string, string>;
}) {
  return (
    <div className="w-auto">
      <ButtonUI
        onClick={() => {
          weatherConsult(coordinates);
        }}
        className="w-fit text-lg"
      >
        {message}
        <span className="w-3 h-3 bg-green-500 rounded-full container relative"></span>
      </ButtonUI>
    </div>
  );
}
