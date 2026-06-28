import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Facebook", leads: 40 },
  { name: "Google", leads: 30 },
  { name: "Website", leads: 20 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow">

      <div className="w-full h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
          >

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="leads" />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default AnalyticsChart;