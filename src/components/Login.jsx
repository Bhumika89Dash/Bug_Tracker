import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bug, Github } from "react-bootstrap-icons";
import Stars from "./Stars";
import BugCursor from './LandingPage/BugCursor/BugPointer.jsx';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear previous errors
    try {
      const response = await axios.post(
        "https://bug-tracker-backend-zq9g.onrender.com/api/v1/users/login",
        formData
      );

      // Assuming API returns a token and user info
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect based on role
      if (user.role === "Admin") navigate("/admin-dashboard");
      else if (user.role === "Developer") navigate("/developer-dashboard");
      else if (user.role === "Tester") navigate("/tester-dashboard");
      else navigate("/"); // fallback
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <>
      <BugCursor />
      <Stars className="fixed top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10">
        <div className="d-flex justify-content-center align-items-center vh-100 text-white">
          <div
            className="d-flex border border-2 rounded shadow"
            style={{ width: "800px", height: "480px", background: "transparent" }}
          >
            {/* Left side */}
            <div className="d-flex flex-column justify-content-center align-items-center flex-fill p-3">
              <Bug size={120} style={{ color: "#FF652F" }} className="mb-3" />
              <h3 className="fw-bold" style={{ color: "#FFE400" }}>
                Bug Tracker
              </h3>
             <button
  className="btn d-flex align-items-center mt-3"
  style={{ backgroundColor: "#2E9CCA", color: "white" }}
  onClick={() => {
    // Open the backend GitHub OAuth endpoint
    window.location.href = "https://bug-tracker-backend-zq9g.onrender.com/api/v1/users/github";
  }}
>
  <Github size={20} className="me-2" />
  Developer? Sign in through GitHub
</button>
            </div>

            {/* Right side */}
            <div className="d-flex flex-column justify-content-center flex-fill p-4 text-white">
              <h4 className="text-center mb-3" style={{ color: "#17E9E0" }}>
                Login
              </h4>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
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
                  Login
                </button>
              </form>

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
