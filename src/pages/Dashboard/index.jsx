
import RecentTransactions from "../../components/RecentTransactions/RecentTransactions";
import StatsCards from "./components/StatsCards";
import statsData from "./statsData";

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {statsData.map((card) => (
                    <StatsCards key={card.id} card={card} />
                ))}
            </div>



            <div className="grid w-full grid-cols-12 gap-6">
                <RecentTransactions/>
            </div>
        </div>
    );
}

export default Dashboard;