import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function App() {
  const isAuthenticated = true; // Replace with your actual authentication logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/post/:postId" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
