import React from "react";

export default function BugTable({ bugs }) {
  return (
    <div className="p-4 rounded-xl border border-white w-full">
      <h3 className="mb-4 font-medium text-white">Recent Bugs</h3>
      <table className="w-full text-sm text-left text-white">
        <thead>
          <tr className="border-b border-gray-500">
            <th className="p-2">Title</th>
            <th className="p-2">Status</th>
            <th className="p-2">Severity</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {bugs.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-300">
                No bugs reported yet.
              </td>
            </tr>
          ) : (
            bugs.map((bug) => (
              <tr
                key={bug.id}
                className="border-b border-gray-500 hover:bg-gray-700 transition-colors duration-200"
              >
                <td className="p-2">{bug.title}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      bug.status === "OPEN"
                        ? "bg-red-500"
                        : bug.status === "IN_PROGRESS"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {bug.status}
                  </span>
                </td>
                <td className="p-2">{bug.severity}</td>
                <td className="p-2">{new Date(bug.created_at).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
