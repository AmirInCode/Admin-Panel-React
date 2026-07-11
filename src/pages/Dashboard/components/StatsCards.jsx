
import MiniChart from "./MiniChart";


const StatsCards = ({ card }) => {
    const Icon = card.icon;
    return (
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    
                    <Icon size={28} />
                </div>

                <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${card.positive ? 'bg-green-300' : 'bg-red-300' }`}
                >
                    {card.change}
                </span>
            </div>

            <div className="mt-6">
                <p className="text-sm text-gray-500">{card.title}</p>

                <h2 className="mt-2 text-3xl font-bold">{card.value}</h2>
            </div>
            <MiniChart
                data={card.chartData}
                positive={card.positive}
            />
        </div>
    );
};

export default StatsCards;