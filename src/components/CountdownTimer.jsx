import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const today = new Date();
      const targetDate = new Date(today.getFullYear(), 8, 27); // September is month 8 (0-indexed)

      // If September 27th has passed this year, target next year
      if (today > targetDate) {
        targetDate.setFullYear(today.getFullYear() + 1);
      }

      const timeDiff = targetDate.getTime() - today.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      setDaysLeft(daysDiff);
    };

    calculateDaysLeft();

    // Update every day at midnight
    const interval = setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-text">
        {daysLeft > 0 ? `${daysLeft} days left` : 'Event Today!'}
      </div>
    </div>
  );
};

export default CountdownTimer;
