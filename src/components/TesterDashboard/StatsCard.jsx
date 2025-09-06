import React from "react";
import { useState } from "react";
export default function StatsGrid() {

     const [stats, setStats] = useState({
        myBugs: 0,
        open: 0,
        closed: 0,
        highSeverity: 0,
      });
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl border border-white flex flex-col justify-between">
        <h3 className="text-sm text-gray-300 mb-2">My Bugs</h3>
        <p className="text-2xl font-semibold text-white">{stats.myBugs}</p>
      </div>
      <div className="p-4 rounded-xl border border-white flex flex-col justify-between">
        <h3 className="text-sm text-gray-300 mb-2">Open Bugs</h3>
        <p className="text-2xl font-semibold text-white">{stats.open}</p>
      </div>
      <div className="p-4 rounded-xl border border-white flex flex-col justify-between">
        <h3 className="text-sm text-gray-300 mb-2">Closed Bugs</h3>
        <p className="text-2xl font-semibold text-white">{stats.closed}</p>
      </div>
      <div className="p-4 rounded-xl border border-white flex flex-col justify-between">
        <h3 className="text-sm text-gray-300 mb-2">High Severity</h3>
        <p className="text-2xl font-semibold text-white">{stats.highSeverity}</p>
      </div>
    </div>
  );
}
