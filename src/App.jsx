import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome/Welcome";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;