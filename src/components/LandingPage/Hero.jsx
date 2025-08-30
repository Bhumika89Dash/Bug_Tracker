// Hero.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hero() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center px-4 py-20"
      style={{
        minHeight: "80vh",
        color: "var(--color-white)",
        backgroundColor: "transparent",
      }}
    >
        <div className="row">
            <div className="col-lg-8">
                {/* Heading */}
      <h1
        className="fw-bold mb-4 heading-font"
        style={{
          fontSize: "2.5rem",
          color: "var(--color-white)",
        }}
      >
        Centralize QA. Report Smarter. Ship Faster.
      </h1>

      {/* Subheading */}
      <p
        className="mb-6 body-font"
        style={{
          fontSize: "1.1rem",
          color: "var(--color-gray)",
          maxWidth: "700px",
        }}
      >
        BugTracker lets teams efficiently track, assign, and resolve bugs across projects – with smart duplicate detection.
      </p>

      {/* CTA Buttons */}
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        <NavLink
          to="/developer-oauth"
          className="px-4 py-2"
          style={{
            backgroundColor: "var(--color-orange)",
            color: "var(--color-white)",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "500",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--color-yellow)")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--color-orange)")}
        >
          Get Started (Developer)
        </NavLink>

        <NavLink
          to="/tester-signup"
          className="px-4 py-2"
          style={{
            backgroundColor: "var(--color-green)",
            color: "var(--color-white)",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "500",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--color-yellow)")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--color-green)")}
        >
          Join as Tester
        </NavLink>
      </div>
            </div>
            <div className="col-lg-4">
{/* Optional illustration / dashboard mockup can go here */}
<div className="mt-10 flex justify-center">
  <i
    className="bi bi-bug text-white p-3 border border-white rounded-full text-6xl"
    style={{ fontSize: "6rem" }}
  ></i>
</div>

            </div>
        </div>
      

     
    </section>
  );
}
