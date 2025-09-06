import React from "react";
import { NavLink } from "react-router-dom";
import { House, PlusCircle, ListCheck, People, InfoCircle } from "react-bootstrap-icons";

export default function SidebarTest() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-3 mb-2 rounded-full transition-colors duration-200
     ${isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700"}`;

  return (
    <>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col mt-4">
        <NavLink to="/tester-oauth" className={linkClass}>
          <House className="w-6 h-6" /> <span className="text-base font-small">Dashboard</span>
        </NavLink>

        <NavLink to="/report-bug" className={linkClass}>
          <PlusCircle className="w-6 h-6" /> <span className="text-base font-small">Report a Bug</span>
        </NavLink>

        <NavLink to="/my-bugs" className={linkClass}>
          <ListCheck className="w-6 h-6" /> <span className="text-base font-small">My Bugs</span>
        </NavLink>

        <NavLink to="/project-bugs" className={linkClass}>
          <People className="w-6 h-6" /> <span className="text-base font-small">All Project Bugs</span>
        </NavLink>

        <NavLink to="/project-info" className={linkClass}>
          <InfoCircle className="w-6 h-6" /> <span className="text-base font-small">Project Info</span>
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-gray-700 text-sm text-gray-500">
        Tester Panel
      </div>
    </>
  );
}
