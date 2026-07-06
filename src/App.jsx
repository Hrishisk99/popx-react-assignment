import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome/Welcome";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;