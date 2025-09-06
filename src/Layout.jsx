import React, { useState } from "react";
import BugCursor from "./components/LandingPage/BugCursor/BugPointer";
import Stars from "./components/Stars";
import Nav from "./components/Nav.jsx";

const Layout = ({ children }) => {
  const [username, setUsername] = useState("Bhumika"); // later replace with backend value

  const handleLogout = () => {
    setUsername(null);
    // clear token/session here
  };

  return (
    <>
      <BugCursor />

      {/* Stars as a fixed full-page background */}
      <Stars className="fixed top-0 left-0 w-full h-full z-0" />

      {/* App container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Nav username={username} onLogout={handleLogout} />

        {/* Main content (takes all remaining space) */}
        <main className="flex-1 w-full">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
