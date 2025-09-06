import { NavLink } from "react-router-dom";
import { BsHouse, BsFolder, BsBug, BsBarChart, BsGear } from "react-icons/bs";

export default function SidebarDev() {
  return (
    <aside>
      <nav className="flex flex-col gap-2">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 justify-start rounded-full px-4 py-2 transition-colors duration-200
            ${isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700"}`
          }
        >
          <BsHouse className="w-6 h-6" />
          <span className="text-base font-medium">Dashboard</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center gap-2 justify-start rounded-full px-4 py-2 transition-colors duration-200
            ${isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700"}`
          }
        >
          <BsFolder className="w-6 h-6" />
          <span className="text-base font-medium">Projects</span>
        </NavLink>

        <NavLink
          to="/bugs"
          className={({ isActive }) =>
            `flex items-center gap-2 justify-start rounded-full px-4 py-2 transition-colors duration-200
            ${isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700"}`
          }
        >
          <BsBug className="w-6 h-6" />
          <span className="text-base font-medium">Bugs</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-2 justify-start rounded-full px-4 py-2 transition-colors duration-200
            ${isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700"}`
          }
        >
          <BsBarChart className="w-6 h-6" />
          <span className="text-base font-medium">Analytics</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 justify-start rounded-full px-4 py-2 transition-colors duration-200
            ${isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700"}`
          }
        >
          <BsGear className="w-6 h-6" />
          <span className="text-base font-medium">Settings</span>
        </NavLink>

      </nav>
    </aside>
  );
}
