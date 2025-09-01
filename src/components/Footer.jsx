import React from "react";
import "./Footer.css"; // import the CSS file
import Leo from "../images/leomuthu.png"
import Sairam from "../images/sairamlogo.png"

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Sairam} className="sairam" alt="" />
      <p>© 2025 CodeCraft Hackathon • Crafted with ☕ + 💻</p>
      <img src={Leo} className="leo" alt="" />
    </footer>
  );
}
