import React from "react";
import "./RegisterForm.css";

// Timeline events with icons
import assembleIcon from "/src/assets/assemble.png";
import problemIcon from "/src/assets/problem.png";
import lunchIcon from "/src/assets/lunch.png";
import teaIcon from "/src/assets/tea.png";
import evalIcon from "/src/assets/progress.png";
import dinnerIcon from "/src/assets/dinner.jpeg";
import codingIcon from "/src/assets/coding.png";
import snacksIcon from "/src/assets/snack.png";
import submitIcon from "/src/assets/submit.png";
import awardsIcon from "/src/assets/awards.png";

import trophyIcon from "/src/images/trophypricepool.png"; // add a trophy icon in your assets

const PrizePool = () => {
  const prizes = [
    { position: "1st Prize", amount: "₹5000" },
    { position: "2nd Prize", amount: "₹3000" },
    { position: "3rd Prize", amount: "₹2000" },
  ];

  return (
    <div className="prize-pool-section">
      <h2 className="timeline-title">Prize Pool</h2>
      <div className="prize-cards">
        {prizes.map((p, idx) => (
          <div key={idx} className="prize-card">
            <img src={trophyIcon} alt="Trophy" className="prize-icon" />
            <h3>{p.position}</h3>
            <p>{p.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};




const Timeline = () => {
   const events = [
    { time: "9:30 AM", desc: "Assemble at Hall",icon:assembleIcon },
    { time: "10:30 AM", desc: "Problem Statement Released",icon:problemIcon },
    { time: "1:00 PM", desc: "Lunch Break", icon: lunchIcon},
    { time: "4:00 PM", desc: "Tea & Snacks",icon:teaIcon},
    { time: "6:00 PM", desc: "Progress Evaluation",icon:evalIcon},
    { time: "8:00 PM", desc: "Dinner Break",icon:dinnerIcon },
    { time: "10:00 PM", desc: "Coding Continues",icon:codingIcon},
    { time: "2:00 AM", desc: "Midnight Snacks" ,icon:snacksIcon},
    { time: "8:00 AM", desc: "Final Submission",icon:submitIcon },
    { time: "11:00 AM", desc: "Presentation & Awards",icon: awardsIcon},
  ];


  return (
    
    <div className="timeline">
      {events.map((event, idx) => (
        <div key={idx} className="timeline-event">
          <div className="timeline-icon">
            <img src={event.icon} alt={event.desc} />
          </div>
          <div className="timeline-content">
            <span className="timeline-time">{event.time}</span>
            <span className="timeline-desc">{event.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const RegisterForm = () => {
  return (
    <div className="register-page">
      {/* Background layers */}
      <div className="retro-background"></div>

      {/* Floating vintage objects */}
      <div className="vintage-objects">
        <div className="vintage-object gramophone"></div>
        <div className="vintage-object cassette"></div>
        <div className="vintage-object lamp"></div>
        <div className="vintage-object record"></div>
        <div className="vintage-object radio"></div>
      </div>

      {/* Overlay */}
      <div className="grunge-overlay"></div>
      <div className="vignette"></div>

      {/* Page content */}
      <div className="register-content">
        <h1 className="vintage-title">Register Your Team</h1>
        <p className="register-desc">
          Join our 24-hour retro hackathon and showcase your creativity. 
          Form teams of 3 members and grab early bird offers before they run out!
        </p>

        <div className="cards-grid">
          <div className="registration-card">
            <h2>Early Bird Offer</h2>
            <p>3 members per team</p>
            <p>Rs 200</p>
            <button>Register Now</button>
          </div>

          <div className="registration-card">
            <h2>Regular Registration</h2>
            <p>3 members per team</p>
            <p>After 50 teams</p>
            <p>Rs 300</p>
            <button>Register Now</button>
          </div>
        </div>
        <PrizePool/>
        {/* Timeline Section */}
        <h2 className="timeline-title">24-Hour Event Timeline</h2>
        <Timeline />

        {/* Additional Info */}
        <div className="additional-info">
          <h3>Event Highlights</h3>
          <ul>
            <li>Live coding challenges and retro-themed activities</li>
            <li>Networking with fellow developers and mentors</li>
            <li>Exciting prizes for the winners</li>
            <li>Music, food, and fun throughout 24 hours!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
