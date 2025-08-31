import React from 'react';
import VideoBackground from './VideoBackground';
import HackathonSection from './HackathonSection';
import MusicPlayer from './MusicPlayer';
import CountdownTimer from './CountdownTimer';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <VideoBackground />
        <div className="content-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to CodeCraft 2025</h1>
            <p className="hero-caption">
              A 24-hour retro hackathon, blending creativity, code, and innovation, organized by M.Tech CSE (Integrated).
            </p>
            <CountdownTimer />
          </div>
        </div>
      </div>
      <HackathonSection />
      <MusicPlayer />
    </>
  );
};

export default HomePage;
