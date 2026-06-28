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

    <div className="bg-white border border-gray-100 rounded-3xl shadow-md px-8 py-6 flex justify-between items-center">



      <div>

        <h2 className="text-3xl font-bold text-slate-800">

          {greeting},

          {" "}

          {adminName}

          {" "}

          👋

        </h2>


        <p className="text-sm text-gray-500 mt-1">

          Lead Management System monitoring all incoming channels

        </p>

      </div>



      <div className="flex items-center gap-5">




        <div className="bg-blue-50 px-5 py-3 rounded-2xl min-w-[150px]">

          <div className="flex items-center gap-2">

            <Database

              size={16}

              className="text-blue-600"
            />


            <p className="text-xs text-gray-500">

              New Today

            </p>

          </div>


          <p className="font-bold text-blue-700 text-xl mt-1">

            {newLeadsToday}

            {" "}

            Leads

          </p>

        </div>



        <div className="bg-green-50 px-5 py-3 rounded-2xl min-w-[170px]">

          <div className="flex items-center gap-2">

            <RefreshCw

              size={16}

              className="text-green-600"
            />


            <p className="text-xs text-gray-500">

              System Status

            </p>

          </div>


          <p className="font-semibold text-green-700 mt-1">

            {syncStatus}

          </p>

        </div>



        <div className="flex items-center gap-3 border-l pl-5">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg flex justify-center items-center shadow-md">

            {

              adminName

                .charAt(0)

                .toUpperCase()

            }

          </div>

          <div>

            <p className="font-semibold text-slate-800">

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