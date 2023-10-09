import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Admin from "./admin";
import "./store";

import "./index.css";
import Admin from "./admin";
import Game from "./game";

const root = createRoot(document.getElementById("root"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="admin" element={<Admin />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);
