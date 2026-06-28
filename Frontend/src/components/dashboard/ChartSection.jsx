import {
  PieChart,
  Pie,
  Cell,
  Tooltip,

  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";


const colors = [
  "#4F46E5",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];


const ChartSection = ({
  sourceStats,

  statusStats,
}) => {

  return (

    <div className="grid grid-cols-2 gap-8">


      <div className="bg-white rounded-2xl p-6 shadow-lg">

        <h2 className="font-semibold mb-6">
          Lead Sources
        </h2>

        <PieChart
          width={350}
          height={300}
        >

          <Pie
            data={sourceStats}

            dataKey="count"

            nameKey="_id"

            outerRadius={100}
          >

            {sourceStats.map(
              (_, index) => (

                <Cell
                  key={index}
                  fill={
                    colors[index]
                  }
                />
              )
            )}

          </Pie>

          <Tooltip />

        </PieChart>

      </div>


      <div className="bg-white rounded-2xl p-6 shadow-lg">

        <h2 className="font-semibold mb-6">
          Lead Status
        </h2>

        <BarChart
          width={400}
          height={300}
          data={statusStats}
        >

          <XAxis
            dataKey="_id"
          />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#4F46E5"
          />

        </BarChart>

      </div>

    </div>
  );
};

export default ChartSection;