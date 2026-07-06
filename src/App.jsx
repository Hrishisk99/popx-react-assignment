import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome/Welcome";


function App() {
  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;