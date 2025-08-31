// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutSection from "./components/AboutSection.jsx";
import VintageDomain from "./components/VintageDomain.jsx";
import RegisterForm from "./components/RegisterForm.jsx";


export default function App() {
  return (
    <BrowserRouter>
      {/* Flex column layout for full height */}
      <div className="relative flex flex-col min-h-screen">
        {/* Background */}

        {/* Navbar always at top */}
        <Navbar />

        {/* Main content fills available space */}
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/domains" element={<VintageDomain />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </main>

        {/* Footer sticks to bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
