import React, { useState } from "react";
import { Bug, Github } from "react-bootstrap-icons";
import Stars from "./Stars";
import BugCursor from './LandingPage/BugCursor/BugPointer.jsx';
export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
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
    console.log("Signup data:", formData);
    // axios call will go here
  };

  return (
     <>
    <BugCursor/>
      {/* Stars as a fixed full-page background */}
      <Stars className="fixed top-0 left-0 w-full h-full z-0" />

   
   
      <div className="relative z-10">
        <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "transparent" }}
    >
      <div
        className="d-flex border border-white rounded-4 p-4"
        style={{ width: "75%", maxWidth: "950px" }}
      >
        {/* Left side - Bug icon + GitHub option */}
        <div className="d-flex flex-column justify-content-center align-items-center flex-fill text-white p-4">
          <Bug size={150} className="mb-4" style={{ color: "#FF652F" }} />

          {/* GitHub Sign In */}
          <div className="mt-3">
            <button
              className="btn d-flex align-items-center"
              style={{ backgroundColor: "#2E9CCA", color: "white" }}
            >
              <Github size={20} className="me-2" />
              Developer? Sign in through GitHub
            </button>
          </div>
        </div>

        {/* Right side - Signup form */}
        <div className="d-flex flex-column justify-content-center flex-fill p-4 text-white">
          <h3 className="text-center mb-4" style={{ color: "#FFE400" }}>
            Signup
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Name + Role parallel */}
            <div className="row mb-3">
              <div className="col">
                <label className="form-label" style={{ color: "#14A76C" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control bg-transparent text-white border-white"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ "::placeholder": { color: "white" } }}
                />
              </div>
              <div className="col">
                <label className="form-label" style={{ color: "#14A76C" }}>
                  Role
                </label>
                <select
  name="role"
  className="form-select border-white"
  value={formData.role}
  onChange={handleChange}
  required
  style={{
    backgroundColor: "#272727",
    color: "white",
  }}
>
  <option value="" disabled style={{ backgroundColor: "#272727", color: "white" }}>
    Select Role
  </option>
  <option value="Tester" style={{ backgroundColor: "#272727", color: "white" }}>
    Tester
  </option>
  <option value="Developer" style={{ backgroundColor: "#272727", color: "white" }}>
    Developer
  </option>
  <option value="Admin" style={{ backgroundColor: "#272727", color: "white" }}>
    Admin
  </option>
</select>

              </div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label" style={{ color: "#3AAFA9" }}>
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

            {/* Password */}
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

            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: "#FF652F", color: "white" }}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
      </div>
    </>
    
  );
}
