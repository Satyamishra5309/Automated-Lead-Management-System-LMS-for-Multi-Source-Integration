import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = ({
  children,
  showNavbar = false
}) => {

  return (

    <div className="flex bg-slate-50 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        {showNavbar && <Navbar />}

        <div className={showNavbar ? "mt-8" : ""}>

          {children}

        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;