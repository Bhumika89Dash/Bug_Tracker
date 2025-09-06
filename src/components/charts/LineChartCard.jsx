import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function LineChartCard({
  data = [], // default empty array
  lineKeys = [], // default empty array
  colors = ["#8884d8", "#82ca9d", "#ffc658"], // default colors
}) {
  return (
    <div className="bg-[#272727] p-4 rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Line Chart</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              border: "none",
              color: "#fff",
            }}
          />
          <Legend />
          {lineKeys.map((key, i) => (
            <Line
              key={i}
              type="monotone"
              dataKey={key}
              stroke={colors[i % colors.length]}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
