import RecentTransactions from "../../components/RecentTransactions/RecentTransactions";

const Transactions = () => {
    return (
        <div className="grid w-full grid-cols-12 gap-6">
            <RecentTransactions />
        </div>
    );
}

export default Transactions;