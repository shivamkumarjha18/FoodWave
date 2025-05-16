// src/App.jsx
import React from 'react';
import Home from './pages/home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Home />
      <ToastContainer /> {/* Yeh Home ke baahar hona chahiye */}
    </div>
  );
};

export default App;
