import React, { useState } from "react";
import StatsCard from "./TesterDashboard/StatsCard";
import BugChart from "./TesterDashboard/BugChart";
import Layout from "../Layout";
import SidebarTest from "./TesterDashboard/SidebarTest";
import BugTable from "./TesterDashboard/BugTable";
import ReportBugModal from "./TesterDashboard/ReportBugModal";

export default function TesterDashboard() {
 
  const [recentBugs, setRecentBugs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <div className="flex min-h-screen">
       
        <SidebarTest className="p-6 flex-1 overflow-hidden" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <main className="p-6 flex-1 overflow-y-auto">
            {/* Stats Section */}
            <div>
              <StatsCard />
            </div>

            {/* Charts Section in separate rows */}
            <div className="flex flex-col gap-6 mb-6">
              <div className="w-full">
                <BugChart type="pie" title="Bug Status" />
              </div>
              <div className="w-full">
                <BugChart type="bar" title="Bugs by Severity" />
              </div>
            </div>

            {/* Recent Bugs Table */}
            <BugTable bugs={recentBugs} />

            {/* Quick Actions */}
            <div className="mt-6">
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Report New Bug
              </button>
            </div>

            {/* Report Bug Modal */}
            {showModal && <ReportBugModal onClose={() => setShowModal(false)} />}
          </main>
        </div>
      </div>
    </Layout>
  );
}
