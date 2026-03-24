import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import formatNumber from "../Utils/Utils";

const AppDataChart = ({ app }) => {
  if (!app || !app.ratings) return null;

  const data = [...app.ratings].reverse().map((r) => ({
    name: `${r.name}`,
    Count: r.count,
  }));

  return (
    <div className="w-11/12 h-100 mx-auto my-10 p-4 bg-[#ffffff15] rounded-lg shadow-md ">
      <h2 className="text-center text-2xl font-semibold mb-4">
        ⭐ Rating Distribution for {app.title}
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
        >
          <XAxis type="number" tickFormatter={(value) => formatNumber(value)} />
          <YAxis dataKey="name" type="category" />
          <Tooltip formatter={(value) => formatNumber(value)} />
          <Bar dataKey="Count" fill="#FF8811" radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppDataChart;
