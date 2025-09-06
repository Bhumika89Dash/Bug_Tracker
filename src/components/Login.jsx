import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bug ,Github} from "react-bootstrap-icons";
import Stars from "./Stars";
import BugCursor from './LandingPage/BugCursor/BugPointer.jsx';

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // later: axios call
  };

  return (
    <>
     <BugCursor/>
      {/* Stars as a fixed full-page background */}
      <Stars className="fixed top-0 left-0 w-full h-full z-0" />

   
   
      <div className="relative z-10">
       <div className="d-flex justify-content-center align-items-center vh-100 text-white">
      {/* Outer box */}
      <div
        className="d-flex border border-2 rounded shadow"
        style={{ width: "800px", height: "480px", background: "transparent" }}
      >
        {/* Left side - Bug Icon */}
        <div className="d-flex flex-column justify-content-center align-items-center flex-fill p-3">
          <Bug size={120} style={{ color: "#FF652F" }} className="mb-3" />
          <h3 className="fw-bold" style={{ color: "#FFE400" }}>
            Bug Tracker
          </h3>

          {/* GitHub login option */}
          <button
            className="btn d-flex align-items-center mt-3"
            style={{ backgroundColor: "#2E9CCA", color: "white" }}
          >
            <Github size={20} className="me-2" />
            Developer? Sign in through GitHub
          </button>
        </div>

        {/* Right side - Login Form */}
        <div className="d-flex flex-column justify-content-center flex-fill p-4 text-white">
          <h4 className="text-center mb-3" style={{ color: "#17E9E0" }}>
            Login
          </h4>

          {/* Row for Role + Email */}
          <div className="row mb-3">
            {/* Role dropdown on left */}
            <div className="col-5">
              <label className="form-label" style={{ color: "#14A76C" }}>
                Role
              </label>
              <select
                name="role"
                className="form-select border-white"
                value={formData.role}
                onChange={handleChange}
                required
                style={{ backgroundColor: "black", color: "white" }}
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="Tester">Tester</option>
                <option value="Developer">Developer</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            {/* Email input on right */}
            <div className="col-7">
              <label className="form-label" style={{ color: "#DA7B93" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control bg-transparent text-white border-white"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password input */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#DA7B93" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control bg-transparent text-white border-white"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Login button */}
          <button
            className="btn w-100"
            style={{ backgroundColor: "#FF652F", color: "white" }}
          >
            Login
          </button>

          <p className="text-center mt-3">
            Don’t have an account?{" "}
            <a href="/signup" className="text-decoration-none" style={{ color: "#3AAFA9" }}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
      </div>
    </>
    
    
  );
}
