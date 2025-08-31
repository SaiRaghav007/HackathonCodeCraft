import React, { useState, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src="/music/background-music.mp3"
        onEnded={() => setIsPlaying(false)}
        loop
      />

      <button className="play-btn" onClick={togglePlayPause}>
        {isPlaying ? '⏸️' : '▶️'}
      </button>
    </div>
  );
};

export default MusicPlayer;
