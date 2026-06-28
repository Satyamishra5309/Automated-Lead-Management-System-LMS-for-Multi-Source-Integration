import {

  Database,

  RefreshCw

} from "lucide-react";


import {

  useSelector

} from "react-redux";


const Navbar = () => {


  const today =
    new Date();


  const greeting =

    today.getHours() < 12

      ? "Good Morning"

      : today.getHours() < 18

      ? "Good Afternoon"

      : "Good Evening";


  const analytics =

    useSelector(

      (state)=>

        state.analytics?.data || {}
    );


  const user =

    useSelector(

      (state)=>

        state.auth.user
    );


  const adminName =

    user?.name || "Admin";

  const newLeadsToday =

    analytics.newLeads || 0;


  const syncStatus =

    "Auto Sync Active";


  return (

    <div className="bg-white border border-gray-100 rounded-3xl shadow-md md:px-8 py-4 md:py-6 mt-6 flex flex-col lg:flex-row justify-between lg:items-center gap-5">



      <div>

        <h2 className="text-xl md:text-3xl font-bold text-slate-800">

          {greeting},

          {" "}

          {adminName}

          {" "}

          👋

        </h2>


        <p className="text-xs md:text-sm text-gray-500 mt-1">

          Lead Management System monitoring all incoming channels

        </p>

      </div>



      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 md:gap-5">




        <div className="bg-blue-50 px-4 md:px-5 py-3 rounded-2xl w-full sm:w-auto min-w-0 md:min-w-[150px]">

          <div className="flex items-center gap-2">

            <Database

              size={16}

              className="text-blue-600"
            />


            <p className="text-xs text-gray-500">

              New Today

            </p>

          </div>


          <p className="font-bold text-blue-700 text-lg md:text-xl mt-1">

            {newLeadsToday}

            {" "}

            Leads

          </p>

        </div>



        <div className="bg-green-50 px-4 md:px-5 py-3 rounded-2xl w-full sm:w-auto min-w-0 md:min-w-[170px]">

          <div className="flex items-center gap-2">

            <RefreshCw

              size={16}

              className="text-green-600"
            />


            <p className="text-xs text-gray-500">

              System Status

            </p>

          </div>


          <p className="font-semibold text-green-700 mt-1 text-sm md:text-base">

            {syncStatus}

          </p>

        </div>



        <div className="flex items-center gap-3 border-l pl-4 md:pl-5">

          <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-base md:text-lg flex justify-center items-center shadow-md">

            {

              adminName

                .charAt(0)

                .toUpperCase()

            }

          </div>

          <div>

            <p className="font-semibold text-slate-800 text-sm md:text-base">

              {adminName}

            </p>


            <p className="text-xs text-gray-400">

              Administrator

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};


export default Navbar;