import {
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

const MiniChart = ({ data, positive }) => {
  return (
    <div className="mt-5 h-16">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id={`gradient-${positive}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor={positive ? "#22c55e" : "#ef4444"}
                stopOpacity={0.35}
              />
              <stop
                offset="100%"
                stopColor={positive ? "#22c55e" : "#ef4444"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke={positive ? "#22c55e" : "#ef4444"}
            strokeWidth={3}
            fill={`url(#gradient-${positive})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniChart;