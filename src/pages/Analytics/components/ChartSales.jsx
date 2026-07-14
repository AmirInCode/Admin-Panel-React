import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

const datasale = [
    { day: "ش", sales: 120 },
    { day: "ی", sales: 200 },
    { day: "د", sales: 150 },
    { day: "س", sales: 280 },
    { day: "چ", sales: 180 },
    { day: "پ", sales: 300 },
    { day: "ج", sales: 90 },
];

const ChartSales = () => {
    return (
        <div className='flex-1 bg-white px-4 py-8 rounded-3xl shadow-md'>
            <h2 className='text-right text-xl font-bold'>فروش هفتگی</h2>
            <ResponsiveContainer>
                <BarChart data={datasale}>


                    <XAxis reversed dataKey="day" />


                    

                    <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#07B5D4" />
                            <stop offset="100%" stopColor="#2463EA" />
                        </linearGradient>
                    </defs>

                    <Bar
                        dataKey='sales'
                        fill="url(#barGradient)"
                        radius={[8, 8, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}

export default ChartSales;