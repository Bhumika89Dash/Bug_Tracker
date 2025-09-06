import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // correct import
import StatsCard from "./TesterDashboard/StatsCard";
import BugChart from "./TesterDashboard/BugChart";
import LayoutTest from "../LayoutTest";
import BugTable from "./TesterDashboard/BugTable";

export default function TesterDashboard() {
  const [recentBugs, setRecentBugs] = useState([]);
  const navigate = useNavigate(); // initialize navigation

  return (
    <LayoutTest>
      <div className="flex flex-col text-white min-h-screen">
        {/* Stats Section */}
        <StatsCard />

        {/* Charts Section */}
        <div className="flex flex-col gap-6 mb-6 mt-6">
          <BugChart type="pie" title="Bug Status" />
          <BugChart type="bar" title="Bugs by Severity" />
        </div>

        {/* Recent Bugs Table */}
        <BugTable bugs={recentBugs} />

        {/* Quick Actions */}
        <div className="mt-6">
          <button
            onClick={() => navigate("/report-bug")} // navigate to Report a Bug page
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Report New Bug
          </button>
        </div>
      </div>
    </LayoutTest>
  );
}
