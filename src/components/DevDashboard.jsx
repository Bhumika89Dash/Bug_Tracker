import { Card, CardContent } from "../components/card";
import Header from "./LandingPage/Navbar";
import Button from "../components/Button";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Sector } from "recharts";
import { Folder, Bug, BarChart3, User } from "lucide-react";
import React from "react";
import { ResponsiveContainer } from "recharts";
const colWidths = ["40%", "30%", "30%"];
export default function DevDashboard({
  stats = [
    { title: "Active Projects", value: 12 },
    { title: "Bugs Reported", value: 37 },
    { title: "Resolved Issues", value: 58 },
  ],

  sidebarItems = [
    { label: "Projects", icon: Folder, onClick: () => alert("Projects clicked") },
    { label: "Bugs", icon: Bug, onClick: () => alert("Bugs clicked") },
    { label: "Analytics", icon: BarChart3, onClick: () => alert("Analytics clicked") },
    { label: "Settings", icon: User, onClick: () => alert("Settings clicked") },
  ],

  recentActivity = [
    { project: "Website Redesign", status: "Completed", date: "2025-08-29" },
    { project: "Mobile App", status: "In Progress", date: "2025-08-28" },
    { project: "Marketing Campaign", status: "Pending", date: "2025-08-27" },
  ],

  lineChartData = [
    { name: "Week 1", uv: 400, pv: 240 },
    { name: "Week 2", uv: 300, pv: 139 },
    { name: "Week 3", uv: 200, pv: 980 },
    { name: "Week 4", uv: 278, pv: 390 },
  ],

  lineKeys = ["uv", "pv"],

  pieChartData = [
    { name: "Completed", value: 400 },
    { name: "In Progress", value: 300 },
    { name: "Pending", value: 300 },
  ],

  pieColors = ["#0088FE", "#00C49F", "#FFBB28"],
}) {
  return (
    <div className="flex flex-col vh-screen bg-black text-white">
      {/* Header */}
      <Header className="w-full shadow-md" />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="relative mt-4 ml-10 w-64 h-68 shadow-md p-4 bg-[#272727] rounded-2xl z-50">
          <nav className="flex flex-col gap-2">
            {sidebarItems.map((item, i) => (
              <Button
                key={i}
                variant="ghost"
                className="flex items-center gap-2 justify-start hover:bg-gray-800 rounded-full px-4 py-2 transition-colors duration-200"
                onClick={item.onClick}
                >
                <item.icon className="w-6 h-6" />
                <span className="text-base font-medium">{item.label}</span>
              </Button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="relative mr-4 flex-1 flex flex-col">
          <div className="p-6 space-y-6 flex-1 overflow-visible">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <Card key={i} className="p-1 bg-[#272727] text-white shadow-md">
                  <CardContent className="p-0 ml-4">
                    <p className="font-normal text-1.5xl mb-0 mt-2 text-gray-400">{stat.title}</p>
                    <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            
           <Card className="p-4 bg-[#272727] text-white shadow-md">
  <CardContent className="p-0">
    
    <div className="max-w-4xl mx-auto p-4 bg-[#272727] text-white shadow-md rounded-md">
      <h3 className="text-lg mb-4 font-semibold">Recent Activity</h3>

      {/* Table header */}
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {["Project", "Status", "Date"].map((header, idx) => (
              <th
                key={header}
                style={{ width: colWidths[idx] }}
                className="text-left py-2 border-b-2 border-white font-semibold text-2xl"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
      </table>

      {/* White horizontal line after header */}
      <hr className="m-0 p-0 h-[1.5px] bg-white border-0" />

      {/* Rows */}
      {recentActivity.map((row, i) => (
        <React.Fragment key={i}>
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr>
                <td
                  style={{ width: colWidths[0] }}
                  className="py-2 font-semibold"
                >
                  {row.project}
                </td>
                <td
                  style={{ width: colWidths[1] }}
                  className="py-2 font-semibold"
                >
                  {row.status}
                </td>
                <td
                  style={{ width: colWidths[2] }}
                  className="py-2 font-semibold"
                >
                  {row.date}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Gray horizontal line between rows except after last */}
          {i !== recentActivity.length - 1 && (
            <hr className="m-0 p-0 h-[1px] bg-gray-600 border-0" />
          )}
        </React.Fragment>
      ))}
    </div>

  </CardContent>
</Card>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Line Chart */}
  <div className="bg-[#272727] p-4 rounded-2xl shadow-lg">
    <h2 className="text-lg font-semibold mb-2">Line Chart</h2>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={lineChartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip
          contentStyle={{ backgroundColor: "#333", border: "none", color: "#fff" }}
          cursor={{ stroke: "#888", strokeWidth: 1 }}
        />
        <Legend />
        {lineKeys.map((key, i) => (
          <Line
            key={i}
            type="monotone"
            dataKey={key}
            stroke={pieColors[i % pieColors.length]}
            strokeWidth={2}
            activeDot={{ r: 6, stroke: "#fff", strokeWidth: 2 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* Pie Chart */}
  <div className="bg-[#272727] p-4 rounded-2xl shadow-lg">
    <h2 className="text-lg font-semibold mb-2">Pie Chart</h2>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius="80%"
          fill="#8884d8"
          dataKey="value"
          activeShape={(props) => (
            <g>
              <text x={props.cx} y={props.cy} dy={8} textAnchor="middle" fill="#fff">
                {props.payload.name}
              </text>
              <Sector {...props} outerRadius={props.outerRadius + 10} fill={props.fill} />
            </g>
          )}
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: "", border: "none", color: "#fff" }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
</div>


          </div>
        </main>
      </div>
    </div>
  );
}
