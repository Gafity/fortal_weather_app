import file from "../../scripts/fortaleza_scripts/export.json";
import type { PolygonNeighborhood } from "./weather-types";

type PolygonNeighborhoodRecord = Record<string, PolygonNeighborhood>;

function orderCoordinates(): PolygonNeighborhoodRecord {
  const polygonCoordinatesDict: { [key: string]: PolygonNeighborhood } = {};

  file.features.forEach((resource) => {
    const name = resource.properties.name;

    if (name) {
      const coordinates = resource.geometry.coordinates as number[][][];

      polygonCoordinatesDict[name] = {
        id: resource.id,
        coordinates: coordinates.map((ring) =>
          ring.map(([lng, lat]) => [lat, lng]),
        ) as [number, number][][],
      };
    }
  });

  return polygonCoordinatesDict;
}

export const polygonNeiborhoodButtom = orderCoordinates();
