import {
  useEffect
} from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import DashboardLayout
from "../layouts/DashboardLayout";

import ChartSection
from "../components/dashboard/ChartSection";

import {
 fetchAnalytics
}
from "../features/analytics/analyticsSlice";


const Analytics = () => {

  const dispatch =
   useDispatch();


  const { data } =
   useSelector(

    (state)=>
      state.analytics
   );


  useEffect(()=>{

    dispatch(
      fetchAnalytics()
    );

  },[dispatch]);


  return (

    <DashboardLayout>

      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">

        Analytics Center

      </h1>

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

export default Analytics;