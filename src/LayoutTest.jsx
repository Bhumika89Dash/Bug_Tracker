import React, { useState } from 'react';
import BugCursor from './components/LandingPage/BugCursor/BugPointer';
import Stars from './components/Stars';
import SidebarTest from './components/TesterDashboard/SidebarTest';
import Nav from './components/Nav';

const LayoutTest = ({ children }) => {
  const [username, setUsername] = useState("Ramu");

  const handleLogout = () => {
    setUsername(null);
    // clear token/session here
  };

  return (
    <>
      {/* Custom cursor */}
      <BugCursor />

      {/* Stars as a fixed full-page background */}
      <Stars className="fixed top-0 left-0 w-full h-full z-0" />

      {/* App container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Nav username={username} onLogout={handleLogout} />

        {/* Main content area with Sidebar + Children */}
        <div className="flex flex-1 mt-2 px-10 gap-6">
          {/* Sidebar */}
          <aside
            className="w-64 flex-shrink-0 shadow-md p-4 rounded-2xl"
            style={{ backgroundColor: "rgba(39, 39, 39, 0.8)" }}
          >
            <SidebarTest />
          </aside>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default LayoutTest;
