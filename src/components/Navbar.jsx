// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__brand">
          CODECRAFT25
        </Link>

        {/* Desktop links */}
        <nav className="nav__links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Event</NavLink>
          <NavLink to="/domains">Domains</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>

        {/* Mobile hamburger / toggle */}
        <button
          className="nav__burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>
      </div>

      {/* Mobile push-down menu */}
      <div className={`nav__mobile-dropdown ${open ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About Event</NavLink>
        <NavLink to="/domains" onClick={() => setOpen(false)}>Domains</NavLink>
        <NavLink to="/register" onClick={() => setOpen(false)}>Register</NavLink>
      </div>
    </header>
  );
}
