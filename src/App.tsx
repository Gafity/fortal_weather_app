import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FortalezaNeighborhood } from "./components/fortaleza-neighborhood";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FortalezaNeighborhood />} />
      </Routes>
    </BrowserRouter>
  );
}
