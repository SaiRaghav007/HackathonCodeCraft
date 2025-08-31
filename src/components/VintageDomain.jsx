import React from 'react';
import { Code, Brain } from 'lucide-react';
import './VintageDomain.css';

const VintageDomain = () => {
  return (
    <>
      {/* Fixed darker vintage background */}
      <div className="vintage-bg">
        <div className="bg-overlay"></div>

        {/* Inline SVG silhouettes */}
        <div className="vintage-object gramophone">
          <svg viewBox="0 0 64 64" fill="currentColor">
            <path d="M10 50h44v4H10zm22-38c-8 0-14 6-14 14s6 14 14 14
                     14-6 14-14-6-14-14-14zm0 20a6 6 0 110-12 6 6 0 010 12z"/>
          </svg>
        </div>

        <div className="vintage-object cassette">
          <svg viewBox="0 0 64 64" fill="currentColor">
            <rect x="8" y="18" width="48" height="28" rx="2" />
            <circle cx="20" cy="32" r="6" fill="#1e0f0b" />
            <circle cx="44" cy="32" r="6" fill="#1e0f0b" />
          </svg>
        </div>

        <div className="vintage-object lamp">
          <svg viewBox="0 0 64 64" fill="currentColor">
            <path d="M28 8h8l6 16H22zm4 24v12h-8v4h24v-4h-8V32z" />
          </svg>
        </div>
      </div>

      {/* Scrollable content overlay */}
      <div className="content-overlay">
        <h1 className="vintage-title">Domains</h1>
        
        {/* Domain cards */}
        <div className="domains-grid">
          <div className="domain-card">
            <Code className="domain-icon" />
            <h3 className="domain-title">Web/App Development</h3>
            <p className="domain-description">
              Create stunning web applications and mobile apps using modern technologies. 
              Build responsive, user-friendly interfaces with cutting-edge frameworks and tools. 
              From frontend design to backend architecture, bring your digital ideas to life.
            </p>
          </div>
          
          <div className="domain-card">
            <Brain className="domain-icon" />
            <h3 className="domain-title">AI</h3>
            <p className="domain-description">
              Harness the power of artificial intelligence and machine learning. 
              Develop intelligent solutions that can analyze, predict, and automate complex tasks. 
              Create AI-powered applications that solve real-world problems.
            </p>
          </div>
        </div>
        
        {/* Rules and Regulations */}
        <div className="rules-section">
          <h2 className="rules-title">Rules & Regulations</h2>
          <ul className="rules-list">
            <li className="rule-item"><span className="rule-number">1</span>Event starts at 9:00 AM sharp - Late arrivals will not be accommodated</li>
            <li className="rule-item"><span className="rule-number">2</span>Topics will be announced on-spot and are specific to your chosen domain</li>
            <li className="rule-item"><span className="rule-number">3</span>Bring your own laptop, charger, mouse, and any other required equipment</li>
            <li className="rule-item"><span className="rule-number">4</span>You have exactly 24 hours to develop and present your solution</li>
            <li className="rule-item"><span className="rule-number">5</span>Team progress will be monitored and evaluated throughout the event</li>
            <li className="rule-item"><span className="rule-number">6</span>Internet access is provided, but external help is strictly prohibited</li>
            <li className="rule-item"><span className="rule-number">7</span>Final presentations must be completed within the allocated time slot</li>
            <li className="rule-item"><span className="rule-number">8</span>Judges' decisions are final and binding for all participants</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default VintageDomain;
