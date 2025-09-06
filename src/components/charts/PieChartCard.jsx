import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function PieChartCard({
  data = [], // default empty array
  colors = ["#8884d8", "#82ca9d", "#ffc658"], // default colors
}) {
  return (
    <div className="bg-[#272727] p-4 rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Pie Chart</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            dataKey="value"
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              border: "none",
              color: "#fff",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
