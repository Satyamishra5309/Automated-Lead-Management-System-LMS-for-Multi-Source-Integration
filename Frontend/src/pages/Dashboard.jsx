import {
  useEffect,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import DashboardLayout
from "../layouts/DashboardLayout";

import KpiCard
from "../components/dashboard/KpiCard";

import ChartSection
from "../components/dashboard/ChartSection";

import {
  fetchAnalytics
}
from "../features/analytics/analyticsSlice";


const Dashboard = () => {

  const dispatch =
    useDispatch();


  const {

    data,

    loading

  } = useSelector(

    (state) =>
      state.analytics
  );


  useEffect(() => {

    dispatch(
      fetchAnalytics()
    );

  }, [dispatch]);


  if (loading) {

    return <div>
      Loading...
    </div>;
  }


  return (

    <DashboardLayout showNavbar={true}>



      <div className="mb-8">

        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">

          Welcome back Admin

        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">

          Here's your business overview today

        </p>

      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">

        <KpiCard

          title="Total Leads"

          value={data.totalLeads}

          growth="Overall leads"

          color="bg-gradient-to-r from-indigo-500 to-indigo-700"
        />


        <KpiCard

          title="New Leads"

          value={data.newLeads}

          growth="Fresh incoming"

          color="bg-gradient-to-r from-emerald-500 to-emerald-700"
        />


        <KpiCard

          title="Contacted"

          value={data.contactedLeads}

          growth="In progress"

          color="bg-gradient-to-r from-purple-500 to-purple-700"
        />


        <KpiCard

          title="Converted"

          value={data.convertedLeads}

          growth="Successful leads"

          color="bg-gradient-to-r from-pink-500 to-pink-700"
        />


        <KpiCard

          title="Lost Leads"

          value={data.lostLeads}

          growth="Dropped"

          color="bg-gradient-to-r from-red-500 to-red-700"
        />


        <KpiCard

          title="Conversion Rate"

          value={`${data.conversionRate}%`}

          growth="Business efficiency"

          color="bg-gradient-to-r from-yellow-500 to-orange-600"
        />

      </div>


      {/* Charts */}

      <ChartSection

        sourceStats={
          data.sourceStats || []
        }

        statusStats={
          data.statusStats || []
        }
      />

    </DashboardLayout>
  );
};

export default Dashboard;