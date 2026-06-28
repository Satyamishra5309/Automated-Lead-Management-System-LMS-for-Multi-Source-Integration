
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FileText,
  LogOut,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  logout,
} from "../../features/auth/authSlice";

import {
  useDispatch,
} from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const navClass =
    "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-700 transition";

  return (
    <div className="w-72 min-h-screen bg-slate-900 text-white p-6 flex flex-col justify-between">

      <div>


        <h1 className="text-3xl font-bold text-indigo-400 mb-10">
          LMS
        </h1>


        <div className="space-y-3">

          <NavLink
            to="/dashboard"
            className={navClass}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/leads"
            className={navClass}
          >
            <Users size={20} />
            Leads
          </NavLink>

          <NavLink
            to="/analytics"
            className={navClass}
          >
            <BarChart3 size={20} />
            Analytics
          </NavLink>

          <NavLink
            to="/reports"
            className={navClass}
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
  );
};

export default Sidebar;