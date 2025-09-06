import React from "react";
import {
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";

export default function BugChart({ type, title }) {
  // Dummy data
  const statusData = [
    { name: "Open", value: 8 },
    { name: "In Progress", value: 3 },
    { name: "Closed", value: 5 },
  ];

  const severityData = [
    { name: "Low", value: 2 },
    { name: "Medium", value: 5 },
    { name: "High", value: 6 },
    { name: "Critical", value: 3 },
  ];

  const pieColors = ["#f87171", "#facc15", "#34d399"];
  const barColor = "#60a5fa";

  return (
    <div className="p-4 rounded-xl border border-white flex items-center gap-6">
      {/* Chart */}
      <div>
        {type === "pie" ? (
          <PieChart width={300} height={250}>
            <Pie data={statusData} dataKey="value" outerRadius={100} label>
              {statusData.map((entry, index) => (
                <Cell key={index} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "none", border: "none", color: "#fff" }}
            />
          </PieChart>
        ) : (
          <BarChart width={350} height={250} data={severityData}>
            <CartesianGrid stroke="none" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "none", border: "none", color: "#fff" }}
            />
            <Bar dataKey="value" fill={barColor} />
          </BarChart>
        )}
      </div>

      {/* Right-side text */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold mb-2">{title} Overview</h4>
        <p className="text-gray-300">
          {type === "pie"
            ? "This chart shows the current status distribution of bugs assigned to you."
            : "This chart displays the count of bugs categorized by severity level."}
        </p>
      </div>
    </div>
  );
}
