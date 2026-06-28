import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Facebook", leads: 40 },
  { name: "Google", leads: 30 },
  { name: "Website", leads: 20 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <BarChart
        width={500}
        height={300}
        data={data}
      >

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="leads" />

      </BarChart>

    </div>
  );
};

export default AnalyticsChart;