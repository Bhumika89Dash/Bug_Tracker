// Features.jsx
import React from "react";
import { FaTasks, FaUserShield, FaKey, FaCopy, FaChartPie } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    icon: <FaTasks size={28} color="var(--color-orange)" />,
    title: "Structured Bug Reports",
    desc: "Steps, severity, attachments, and reproducible info for clear bug tracking.",
  },
  {
    icon: <FaUserShield  size={28} color="var(--color-green)" />,
    title: "Role-based Assignments",
    desc: "Assign bugs to developers, testers, team leaders, AI/ML, UI/UX, or CyberSec roles.",
  },
  {
    icon: <FaKey size={28} color="var(--color-yellow)" />,
    title: "Project Tokens & Invites",
    desc: "Onboard testers easily with secure project tokens and invites.",
  },
  {
    icon: <FaCopy size={28} color="var(--color-orange)" />,
    title: "Duplicate Detection",
    desc: "Save time by automatically spotting and merging repeated bug reports.",
  },
  {
    icon: <FaChartPie size={28} color="var(--color-green)" />,
    title: "Analytics Dashboard",
    desc: "Track severity distribution, open vs closed bugs, and project-level metrics.",
  },
];

export default function Features() {
  return (
    <section
      className="py-20 px-4 text-center"
      style={{
        backgroundColor: "transparent",
        color: "var(--color-white)",
      }}
    >
      {/* Section Heading */}
      <h2
        className=" mb-5"
        style={{ fontSize: "2rem", color: "var(--color-white)" }}
      >
        Why Choose BugTracker?
      </h2>

      {/* Features Grid */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {features.map((feature, idx) => (
            <div key={idx} className="col-md-4 col-sm-6">
              <div
                className="p-4 h-100 rounded shadow-sm"
                style={{
                  backgroundColor: "var(--color-dark)",
                  border: "1px solid var(--color-gray)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 6px rgba(0,0,0,0.2)";
                }}
              >
                <div className="d-flex justify-content-center mb-3">{feature.icon}</div>
                <h5
                  className=" mb-2"
                  style={{ color: "var(--color-yellow)" }}
                >
                  {feature.title}
                </h5>
                <p style={{ fontSize: "0.9rem", color: "var(--color-gray)" }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
