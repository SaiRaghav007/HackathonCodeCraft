import "./AboutSection.css";
import React from "react";
import RetroBackground from "./RetroBackground";

const coordinators = [
  {
    name: "G.Yuvaraj",
    role: "Staff Coordinator",
    phone: "8098857544",
    email: "priya@sairam.edu",
    photo: "/public/images/Aadhi.jpeg",
  },
  {
    name: "Mrs.Shiny",
    role: "Staff Coordinator",
    phone: "9962275202",
    email: "karthik@sairam.edu",
    photo: "/public/images/Aadhi.jpeg",
  },
  {
    name: "S.M.Selva Vignesh",
    role: "Student Lead",
    phone: "9080413155",
    email: "sec22cj001@sairamtap.edu.in",
    photo: "/public/images/Aadhi.jpeg",
  },
  {
    name: "A.Rishi Vel",
    role: "Student Lead",
    phone: "8610556160",
    email: "arjun@sairam.edu",
    photo: "/public/images/Aadhi.jpeg",
  },
];

export default function AboutSection() {
  return (
    <section className="about container">
      {/* Full-page gradient background */}
      <div className="about-bg"></div>

      {/* Retro floating objects */}
      <RetroBackground />

      {/* Title */}
      <h1 className="vintage-title">About CODECRAFT25</h1>

      {/* Event Description */}
      <div className="lead-container">
        <p className="lead">
          This is a <strong>24-hour hackathon</strong> conducted by the Department
          of <strong>M.Tech CSE (Integrated), Sri Sairam Engineering College</strong>.
          On-spot problem statements will be provided and teams must implement
          solutions within the next 24 hours. Food and refreshments will be provided
          for all participants.
        </p>
      </div>

      {/* Coordinators Section */}
      <h2 className="grid-title">Coordinators</h2>
      <div className="card-grid">
        {coordinators.map((c) => (
          <div className="person-card" key={c.email}>
            <img src={c.photo} alt={c.name} />
            <div className="person-info">
              <h3>{c.name}</h3>
              <p className="muted">{c.role}</p>
              <p>📞 {c.phone}</p>
              <p>✉️ {c.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
