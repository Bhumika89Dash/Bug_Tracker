// HowItWorks.jsx
import React from "react";
import { FaUserAlt, FaUsers, FaBug, FaChartLine } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const steps = [
  {
    number: "1",
    icon: <FaUserAlt size={28} color="var(--color-orange)" />,
    title: "Developer Creates Project",
    desc: "Log in, create a project, and generate a secure project token.",
  },
  {
    number: "2",
    icon: <FaUsers size={28} color="var(--color-green)" />,
    title: "Tester Joins Project",
    desc: "Testers use the token to quickly join the project workspace.",
  },
  {
    number: "3",
    icon: <FaBug size={28} color="var(--color-yellow)" />,
    title: "Report & Assign Bugs",
    desc: "Testers report bugs, leaders assign tasks, and developers fix issues.",
  },
  {
    number: "4",
    icon: <FaChartLine size={28} color="var(--color-orange)" />,
    title: "Smart Detection & Analytics",
    desc: "Duplicate detection and dashboards keep your team efficient.",
  },
];

export default function HowItWorks() {
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
        className="mb-5"
        style={{ fontSize: "2rem", color: "var(--color-white)" }}
      >
        How It Works
      </h2>

      {/* Steps Grid */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {steps.map((step, idx) => (
            <div key={idx} className="col-md-3 col-sm-6">
              <div
                className="p-4 h-100 rounded shadow-sm d-flex flex-column align-items-center"
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
                {/* Number Circle */}
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-yellow)",
                    color: "var(--color-dark)",
                    fontWeight: "bold",
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-3">{step.icon}</div>

                {/* Title */}
                <h5
                  className=" mb-2"
                  style={{ color: "var(--color-white)" }}
                >
                  {step.title}
                </h5>

                {/* Description */}
                <p style={{ fontSize: "0.9rem", color: "var(--color-gray)" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
