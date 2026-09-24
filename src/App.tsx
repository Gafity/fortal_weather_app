import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FortalezaNeighborhoods } from "./components/fortaleza-neighborhoods";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FortalezaNeighborhoods />} />
      </Routes>
    </BrowserRouter>
  );
}
