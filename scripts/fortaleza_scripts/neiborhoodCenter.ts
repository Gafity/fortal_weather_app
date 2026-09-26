import {
  readFileSync,
  writeFileSync,
  writeFile,
  type PathOrFileDescriptor,
} from "fs";
import file from "./neighborhoodCenteroverpass.json";
import type { LatLngExpression } from "leaflet";
import path from "node:path";
import { fileURLToPath } from "url";

type neighborhood = { [key: string]: number[] };

function extractCenterCoordinates(): neighborhood {
  const centerCoordinates: neighborhood = {};

  file.elements.forEach(
    (relation) =>
      (centerCoordinates[relation.tags.name] = [
        relation.center.lat,
        relation.center.lon,
      ]),
  );

  console.log(centerCoordinates);
  return centerCoordinates;
}

function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathFile = path.join(__dirname, "neighborhoodCenter.json");

  const jsonCoordinates = JSON.stringify(extractCenterCoordinates(), null, 1);
  writeFileSync(pathFile, jsonCoordinates);
  extractCenterCoordinates();
}

main();
