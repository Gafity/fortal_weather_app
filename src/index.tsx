import { createRoot } from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";

const elem = document.getElementById("root")!;
if (elem === null) {
  throw Error("Elem not found");
}
const root = createRoot(elem);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
