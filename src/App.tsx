import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fortaleza } from "./fortaleza-neighborhood/neighborhood";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fortaleza />} />
      </Routes>
    </BrowserRouter>
  );
}
