import React, { useState } from 'react';
import './HackathonSection.css';
import hackathonBg from '../images/hackathon-bg.jpg';

const HackathonSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const hackathons = [
    {
      id: 1,
      title: "Web Development/App Development",
      fullDescription: "Build dynamic and responsive web applications. Showcase your skills in front-end, back-end, or full-stack development."
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      fullDescription: "Develop intelligent systems using the latest in AI and machine learning."
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleRegister = (domainTitle) => {
    alert(`Registration for ${domainTitle} - Coming Soon!`);
  };



  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hackathonBg})`
  };

  return (
    <section className="hackathon-section" style={sectionStyle}>
      <div className="container">
        <h2 className="section-title">Domains</h2>
        <div className="hackathon-grid">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className={`hackathon-card ${expandedCard === hackathon.id ? 'expanded' : ''}`}
            >
              <div className="card-header" onClick={() => toggleCard(hackathon.id)}>
                <h3 className="card-title">{hackathon.title}</h3>
                <p className="card-short-desc">{hackathon.shortDescription}</p>
                <div className="expand-icon">
                  {expandedCard === hackathon.id ? '−' : '+'}
                </div>
              </div>
              
              {expandedCard === hackathon.id && (
                <div className="card-content">
                  <p className="card-description">{hackathon.fullDescription}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Register Button Section */}
        <div className="register-section">
          <button
            className="main-register-btn"
            onClick={() => handleRegister("CodeCraft 2025")}
          >
            🎯 Register Now for CodeCraft 2025
          </button>
        </div>

        {/* Registration Fees Section */}
        <div className="registration-section">
          <div className="early-bird-offer">
            <h3 className="offer-title">🎟️ Early Bird Offer</h3>
            <div className="price-highlight">₹200 per team</div>
            <p className="offer-subtitle">(Limited to the first 20 teams)</p>
            <p className="offer-warning">Hurry! This offer is valid for a limited time only.</p>
          </div>

          <div className="regular-fees">
            <h3 className="fees-title">📝 Registration Fees</h3>
            <div className="price-regular">₹300 per team</div>
            <p className="fees-subtitle">(Applicable after the Early Bird Offer closes)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
