import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Home from "./Components/Home";
import About from "./Components/About";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isAuthenticated = true; // Replace with your actual authentication logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/post/:postId" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
