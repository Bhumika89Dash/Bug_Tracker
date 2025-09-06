// Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaBug } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <header
      className="d-flex justify-content-between align-items-center px-4 py-3 rounded shadow"
      style={{
        margin: "1rem",
        backgroundColor: "rgba(128,128,128,0.3)", // greyish with transparency
        backdropFilter: "blur(5px)",
      }}
    >
      {/* Left: Logo */}
      <div>
         <i
    className="bi bi-bug text-white p-3 text-xl"></i>
  <span className="text-white ms-2 logo-font">BugTracker</span>
      </div>

      {/* Center: optional nav links, can be added here if needed */}

      {/* Right: Login NavLink */}
      <div>
        <NavLink
          to="/login"
          className="px-3 py-1"
          style={{
            backgroundColor: "#FF652F",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "500",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#FFE400")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF652F")}
        >
          Login
        </NavLink>
      </div>
    </header>
  );
}


