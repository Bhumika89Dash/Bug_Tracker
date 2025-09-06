import React, { useEffect, useState } from "react";
import axios from "axios";
import QuickActions from "./DeveloperDashboard/Projects/QuickActions";
import ProjectCard from "./DeveloperDashboard/Projects/ProjectCard";
import ProjectModal from "./DeveloperDashboard/Projects/ProjectModal";
import ProjectList from "./DeveloperDashboard/Projects/ProjectList";
import Layout from "../Layout";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch projects for the current developer
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/api/projects/mine", { withCredentials: true });
        const data = Array.isArray(res.data) ? res.data : res.data.projects || [];
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  // QuickActions handlers
  const handleCreate = () => setModalOpen(true);
  const handleFileBug = () => console.log("Open bug modal");
  const handleInvite = () => console.log("Open invite modal");
  const handleProjectClick = (id) => console.log("Navigate to project detail", id);

  return (
    <Layout>
      <div className="p-6 bg-[#272727] min-h-screen text-white">
        {/* Quick Actions */}
        <QuickActions
          onCreate={handleCreate}
          onFileBug={handleFileBug}
          onInvite={handleInvite}
        />

        {/* Projects Cards */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-gray-400 text-center">
            No projects found. Click "Create Project" to add one.
          </p>
        )}

        {/* Project List Table (always visible) */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">All Projects</h2>
          {projects.length > 0 ? (
            <ProjectList projects={projects} onClick={handleProjectClick} />
          ) : (
            // Empty table with headers only
            <table className="w-full border-collapse text-white">
              <thead>
                <tr className="bg-gray text-gray">
                  <th className="px-4 py-2 text-left">Project</th>
                  <th className="px-4 py-2 text-left">Repo</th>
                  <th className="px-4 py-2 text-left">Deployed</th>
                  <th className="px-4 py-2 text-left">Open Bugs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="px-4 py-4 text-center text-gray-400">
                    No projects to display
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Project Modal */}
        {modalOpen && (
          <ProjectModal
            onClose={() => setModalOpen(false)}
            onCreated={(newProject) => setProjects([newProject, ...projects])}
          />
        )}
      </div>
    </Layout>
  );
}
    