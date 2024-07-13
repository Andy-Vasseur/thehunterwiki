// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import Reserve from "./pages/Reserve";
import Animal from "./pages/Animal";

function App() {
  return (
    <div className="bg-pictureBackground bg-center bg-cover">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reserves/:reserveid" element={<Reserve />} />
        <Route path="/reserves/:reserveid/:animalid" element={<Animal />} />
      </Routes>
    </div>
  );
}

export default App;
