import React from 'react';

import HackathonSection from './HackathonSection';

import './HomePage.css';
import TypingText from "./TypingText.jsx";
import VideoBackground from "/src/components/VideoBackground";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <VideoBackground/>
        <div className="content-overlay">
          <div className="hero-content">
             <TypingText />
            <p className="hero-caption">
              A 24-hour retro hackathon, blending creativity, code, and innovation, organized by M.Tech CSE (Integrated).
            </p>
            
          </div>
        </div>
      </div>

    
    </>
  );
};

export default HomePage;
