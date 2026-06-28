import {
  useEffect,
  useState,
  useMemo
} from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import DashboardLayout
from "../layouts/DashboardLayout";


import LeadTable
from "../components/dashboard/LeadTable";

import {
  fetchLeads
}
from "../features/lead/leadSlice";
import { Sidebar } from "lucide-react";


const Leads = () => {

  const dispatch = useDispatch();

  const { leads } =
    useSelector(
      (state) => state.leads
    );



  const [search, setSearch] =
    useState("");



  const [statusFilter,
         setStatusFilter] =
    useState("all");


  useEffect(() => {

    dispatch(
      fetchLeads()
    );

  }, [dispatch]);



  const filteredLeads =
    useMemo(() => {

      return leads.filter(
        (lead) => {

          const matchesSearch =

            lead.name
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              )

            ||

            lead.email
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              );


          const matchesStatus =

            statusFilter === "all"

            ||

            lead.status ===
              statusFilter;


          return (
            matchesSearch
            &&
            matchesStatus
          );
        }
      );

    }, [
      leads,
      search,
      statusFilter
    ]);


  return (

    <DashboardLayout>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">

        Leads Management

      </h1>



      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg mb-6">


        <input

          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

          placeholder="Search by name or email..."

          className="border px-4 py-3 rounded-xl w-full mb-5 outline-none focus:ring-2 focus:ring-indigo-500"
        />


        <div className="flex gap-3 flex-wrap">


          <button

            onClick={() =>
              setStatusFilter(
                "all"
              )
            }

            className={`px-3 md:px-4 py-2 rounded-xl font-medium transition ${
              statusFilter === "all"

              ?

              "bg-gray-800 text-white"

              :

              "bg-gray-100"
            }`}
          >

            All
            {" "}
            (
            {leads.length}
            )

          </button>



          <button

            onClick={() =>
              setStatusFilter(
                "new"
              )
            }

            className={`px-3 md:px-4 py-2 rounded-xl transition ${
              statusFilter === "new"

              ?

              "bg-yellow-400 text-black"

              :

              "bg-yellow-100"
            }`}
          >

            New
            {" "}
            (
            {
              leads.filter(
                (l) =>
                  l.status === "new"
              ).length
            }
            )

          </button>


          <button

            onClick={() =>
              setStatusFilter(
                "contacted"
              )
            }

            className={`px-3 md:px-4 py-2 rounded-xl transition ${
              statusFilter === "contacted"

              ?

              "bg-blue-500 text-white"

              :

              "bg-blue-100"
            }`}
          >

            Contacted
            {" "}
            (
            {
              leads.filter(
                (l) =>
                  l.status === "contacted"
              ).length
            }
            )

          </button>



          <button

            onClick={() =>
              setStatusFilter(
                "converted"
              )
            }

            className={`px-3 md:px-4 py-2 rounded-xl transition ${
              statusFilter === "converted"

              ?

              "bg-green-500 text-white"

              :

              "bg-green-100"
            }`}
          >

            Converted
            {" "}
            (
            {
              leads.filter(
                (l) =>
                  l.status === "converted"
              ).length
            }
            )

          </button>


          <button

            onClick={() =>
              setStatusFilter(
                "lost"
              )
            }

            className={`px-3 md:px-4 py-2 rounded-xl transition ${
              statusFilter === "lost"

              ?

              "bg-red-500 text-white"

              :

              "bg-red-100"
            }`}
          >

            Lost
            {" "}
            (
            {
              leads.filter(
                (l) =>
                  l.status === "lost"
              ).length
            }
            )

          </button>

        </div>

      </div>


      <LeadTable
        leads={
          filteredLeads
        }
      />

    </DashboardLayout>
  );
};

export default Leads;