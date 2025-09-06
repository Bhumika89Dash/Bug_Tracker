import React, { useState } from "react";

export default function ReportBugModal({ onClose }) {
  const [form, setForm] = useState({
    title: "",
    steps: "",
    severity: "Low",
    attachments: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with axios POST
    console.log("Bug submitted:", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96">
        <h3 className="mb-4 text-lg font-semibold">Report New Bug</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 border rounded"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            placeholder="Steps to Reproduce"
            className="w-full p-2 border rounded"
            rows="3"
            value={form.steps}
            onChange={(e) => setForm({ ...form, steps: e.target.value })}
          />
          <select
            className="w-full p-2 border rounded"
            value={form.severity}
            onChange={(e) => setForm({ ...form, severity: e.target.value })}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
          <input
            type="file"
            multiple
            onChange={(e) => setForm({ ...form, attachments: e.target.files })}
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-3 py-1 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
