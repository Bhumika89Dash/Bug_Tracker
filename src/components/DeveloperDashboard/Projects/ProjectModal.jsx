import React, { useState } from "react";
import axios from "axios";

export default function ProjectModal({ onClose, onCreated }) {
  const [name, setName] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [deployUrl, setDeployUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/projects",
        { name, repo_url: repoUrl, deploy_url: deployUrl },
        { withCredentials: true }
      );
      onCreated(res.data);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Error creating project!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-dark p-6 rounded-lg w-full max-w-md text-white">
        <h2 className="text-2xl font-semibold mb-4 text-yellow">Create Project</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            required
          />
          <input
            type="url"
            placeholder="GitHub Repo URL"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            className="bg-gray text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            required
          />
          <input
            type="url"
            placeholder="Deployed URL (optional)"
            value={deployUrl}
            onChange={(e) => setDeployUrl(e.target.value)}
            className="bg-gray text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray hover:bg-neon transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-orange hover:bg-yellow text-white transition-colors"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
