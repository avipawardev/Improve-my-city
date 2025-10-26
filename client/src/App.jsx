import React from "react";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ComplaintProvider } from "./context/ComplaintContext";
import router from "./router";
import "./index.css";

// Import the theme configuration
import "./theme/ThemeConfig";

function App() {
  return (
    <AuthProvider>
      <ComplaintProvider>
        <div className="min-h-screen bg-white">
          <RouterProvider router={router} />
        </div>
      </ComplaintProvider>
    </AuthProvider>
  );
}

export default App;
