import React from 'react';
import './RetroBackground.css';

const RetroBackground = () => {
  return (
    <div className="retro-background">
      <div className="grid-container">
        <div className="perspective-grid"></div>
        <div className="horizon-glow"></div>
      </div>
      
      <div className="floating-elements">
        <div className="vintage-objects">
          <div className="vintage-gramophone gram-1"></div>
          <div className="vintage-gramophone gram-2"></div>
          <div className="vintage-lamp lamp-1"></div>
          <div className="vintage-lamp lamp-2"></div>
          <div className="vintage-clock clock-1"></div>
          <div className="vintage-clock clock-2"></div>
          <div className="vintage-radio radio-1"></div>
          <div className="vintage-cassette cassette-1"></div>
          <div className="vintage-typewriter typewriter-1"></div>
          <div className="vintage-camera camera-1"></div>
          <div className="vintage-books books-1"></div>
          <div className="vintage-watch watch-1"></div>
        </div>
      </div>
      
      <div className="pixel-patterns">
        <div className="pattern pattern-1"></div>
        <div className="pattern pattern-2"></div>
        <div className="pattern pattern-3"></div>
      </div>
      
      <div className="scanlines"></div>
      <div className="texture-overlay"></div>
      <div className="grunge-overlay"></div>
      <div className="vignette"></div>
    </div>
  );
};

export default RetroBackground;
