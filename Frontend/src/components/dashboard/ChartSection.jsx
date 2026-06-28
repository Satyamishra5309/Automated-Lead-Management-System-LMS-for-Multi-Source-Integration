import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,

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

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">


      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">

        <h2 className="font-semibold mb-6">
          Lead Sources
        </h2>

        <div className="w-full h-[300px]">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

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

          </ResponsiveContainer>

        </div>

      </div>


      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">

        <h2 className="font-semibold mb-6">
          Lead Status
        </h2>

        <div className="w-full h-[300px]">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart
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

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default ChartSection;