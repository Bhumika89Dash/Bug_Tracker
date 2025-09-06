import React from "react";
import { BsFolder } from "react-icons/bs";

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      className="bg-dark p-4 rounded-lg cursor-pointer hover:bg-gray transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 mb-2">
        <BsFolder className="w-6 h-6 text-yellow" />
        <h3 className="text-white font-semibold">{project.name}</h3>
      </div>
      <p className="text-gray text-sm mb-1">
        Repo: <a href={project.repo_url} target="_blank" className="underline text-neon">{project.repo_url}</a>
      </p>
      {project.deploy_url && (
        <p className="text-gray text-sm mb-1">
          Deployed: <a href={project.deploy_url} target="_blank" className="underline text-neon">{project.deploy_url}</a>
        </p>
      )}
      <p className="text-gray text-sm">Open Bugs: <span className="text-pink">{project.openBugs}</span></p>
    </div>
  );
}
