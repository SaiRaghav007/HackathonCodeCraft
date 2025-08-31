// src/components/TypingText.jsx
import React from "react";
import { ReactTyped } from "react-typed";

export default function TypingText() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <h1 
        className="text-center text-6xl font-bold" 
        style={{ 
          fontFamily: "'Special Elite', cursive", 
          color: "#f4d03f", // vintage golden-yellow
          textShadow: "2px 2px 8px rgba(0,0,0,0.6)" // glow for vintage feel
        }}
      >
        <ReactTyped
          strings={["WELCOME TO CODECRAFT 2025"]}
          typeSpeed={70}
          backSpeed={40}
          loop={true}
          showCursor={true}
        />
      </h1>
    </div>
  );
}
