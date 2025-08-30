// TargetUsers.jsx
import React from "react";
import { FaCode, FaVial, FaUserTie } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const users = [
  {
    icon: <FaCode size={28} color="var(--color-orange)" />,
    role: "Developers",
    desc: "Sign in with GitHub OAuth, manage projects, and track analytics.",
  },
  {
    icon: <FaVial size={28} color="var(--color-green)" />,
    role: "Testers",
    desc: "Join projects with tokens and file structured bug reports.",
  },
  {
    icon: <FaUserTie size={28} color="var(--color-yellow)" />,
    role: "Project Leaders",
    desc: "Assign roles, manage bugs, and oversee project workflows.",
  },
];

export default function TargetUsers() {
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
        Who Is BugTracker For?
      </h2>

      {/* Users Grid */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {users.map((user, idx) => (
            <div key={idx} className="col-md-4 col-sm-6">
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
                {/* Icon */}
                <div className="mb-3">{user.icon}</div>

                {/* Role */}
                <h5
                  className=" mb-2"
                  style={{ color: "var(--color-white)" }}
                >
                  {user.role}
                </h5>

                {/* Description */}
                <p style={{ fontSize: "0.9rem", color: "var(--color-gray)" }}>
                  {user.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
