import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = ({
  children,
  showNavbar = false
}) => {

  return (

    <div className="flex bg-slate-50 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-4 md:p-6 w-full">

        {showNavbar && <Navbar />}

        <div
          className={`${
            showNavbar
              ? "mt-6 md:mt-8"
              : ""
          } ${
            showNavbar
              ? "pt-14 md:pt-0"
              : "pt-12 md:pt-0"
          }`}
        >

          {children}

        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;