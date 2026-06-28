import DashboardLayout
from "../layouts/DashboardLayout";

import ReportCard
from "../components/dashboard/ReporCard";


const Reports = () => {

const downloadExcel = async () => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/reports/excel",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "leads-report.xlsx";

    document.body.appendChild(a);
    a.click();
    a.remove();

  } catch (error) {
    console.log(error);
  }
};


const downloadPDF = async () => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/reports/pdf",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "leads-report.pdf";

    document.body.appendChild(a);
    a.click();
    a.remove();

  } catch (error) {
    console.log(error);
  }
};


  return (

    <DashboardLayout>

      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">

        Reports Center

      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        <ReportCard

          title="Excel Report"

          description="Export all lead data with campaign performance and source insights."

          color="bg-gradient-to-r from-emerald-500 to-green-700"

          onClick={
            downloadExcel
          }

        />


        <ReportCard

          title="PDF Report"

          description="Business performance report with analytics, conversions and metrics."

          color="bg-gradient-to-r from-red-500 to-red-700"

          onClick={
            downloadPDF
          }

        />

      </div>


      {/* History */}

      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mt-6 md:mt-8">

        <h2 className="font-semibold mb-4">

          Recent Exports

        </h2>

        <p className="text-gray-500">

          No recent report history

        </p>

      </div>

    </DashboardLayout>
  );
};

export default Reports;