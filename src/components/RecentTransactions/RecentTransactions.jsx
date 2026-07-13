import TransactionRow from "./TransactionRow";
import transactionsData from "./transactionsData";

const RecentTransactions = () => {
  return (
    <div className="col-span-12 rounded-3xl border border-gray-200 bg-white shadow-sm ">
      <div className="flex items-center justify-between border-b border-gray-100 p-6">
        <h2 className="text-lg font-bold">
          آخرین تراکنش‌ها
        </h2>

        <button className="text-sm font-medium text-blue-600">
          مشاهده همه
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-right">شماره</th>
              <th className="px-6 py-4 text-right">کاربر</th>
              <th className="px-6 py-4 text-right">مبلغ</th>
              <th className="px-6 py-4 text-right">وضعیت</th>
              <th className="px-6 py-4 text-right">تاریخ</th>
            </tr>
          </thead>

          <tbody>
            {transactionsData.map((item) => (
              <TransactionRow
                key={item.id}
                item={item}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;