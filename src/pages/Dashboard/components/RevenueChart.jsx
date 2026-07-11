import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "فروردین", revenue: 120 },
  { name: "اردیبهشت", revenue: 180 },
  { name: "خرداد", revenue: 150 },
  { name: "تیر", revenue: 250 },
  { name: "مرداد", revenue: 220 },
  { name: "شهریور", revenue: 320 },
];

const RevenueChart = () => {
  return (
    <div className="col-span-12 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">درآمد ماهانه</h2>
          <p className="text-sm text-gray-500">
            عملکرد ۶ ماه اخیر
          </p>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;