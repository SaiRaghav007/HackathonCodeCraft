import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
        <source src="/videos/background-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;
