import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const navClass =
    "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-700 transition";

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white p-2 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={22} />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          bg-slate-900 text-white p-6 flex flex-col justify-between
          fixed top-0 left-0 min-h-screen z-50 transition-transform duration-300
          
          w-72
          
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static
        `}
      >
        <div>
          {/* Mobile Close */}
          <div className="flex justify-between items-center md:block">
            <h1 className="text-3xl font-bold text-indigo-400 mb-10 md:mb-10">
              LMS
            </h1>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="space-y-3">
            <NavLink
              to="/dashboard"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>

            <NavLink
              to="/leads"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              <Users size={20} />
              Leads
            </NavLink>

            <NavLink
              to="/analytics"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              <BarChart3 size={20} />
              Analytics
            </NavLink>

            <NavLink
              to="/reports"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              <FileText size={20} />
              Reports
            </NavLink>
          </div>

          <div className="mt-12">
            <p className="text-gray-400 text-sm mb-4">
              System Status
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                Website API
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                Meta API
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                Google API
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;