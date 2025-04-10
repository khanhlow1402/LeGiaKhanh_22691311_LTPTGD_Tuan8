import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Folder,
  Users,
  BarChart2,
  MessageCircle,
  Code,
} from "lucide-react";
import logo from "../assets/logo.png";
import icon from "../assets/Group.png";
export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white shadow-md p-4 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-6">
          <img src={logo} alt="Logo" />
        </div>

        {/* Menu */}
        <nav className="space-y-1">
          <NavItem
            to="/"
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
          />
          <NavItem
            to="/projects"
            icon={<Folder size={18} />}
            label="Projects"
          />
          <NavItem to="/teams" icon={<Users size={18} />} label="Teams" />
          <NavItem
            to="/analytics"
            icon={<BarChart2 size={18} />}
            label="Analytics"
          />
          <NavItem
            to="/messages"
            icon={<MessageCircle size={18} />}
            label="Messages"
          />
          <NavItem
            to="/integrations"
            icon={<Code size={18} />}
            label="Integrations"
          />
        </nav>
      </div>

      {/* Banner quảng cáo */}
      <div className="bg-blue-50 p-4 rounded-lg text-center mt-6">
        <img src={icon} alt="Upgrade" className="mx-auto mb-2" />
        <p className="font-semibold text-sm">V2.0 is available</p>
        <button className="mt-2 px-3 py-1 text-blue-500 border border-blue-500 rounded-md text-sm hover:bg-blue-100">
          Try now
        </button>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-2 px-3 py-2 rounded-md transition ${
          isActive
            ? "bg-pink-500 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      {icon}
      <span className="text-sm">{label}</span>
    </NavLink>
  );
}
