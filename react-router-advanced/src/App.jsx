import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  // Example authentication logic (replace with your actual logic)
  const isAuthenticated = true; // or false based on your auth logic

  return (
    <Router>
      <Routes>
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
