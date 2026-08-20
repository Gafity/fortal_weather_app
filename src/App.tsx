import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { Fortaleza } from "./fortaleza/fortaleza";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weather" element={<Home />} />
        <Route path="/fortaleza" element={<Fortaleza />} />
      </Routes>
    </BrowserRouter>
  );
}
