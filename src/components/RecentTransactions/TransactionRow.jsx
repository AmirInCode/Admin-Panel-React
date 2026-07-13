const TransactionRow = ({ item }) => {
  return (
    <tr className="border-b border-gray-100 transition hover:bg-gray-50">
      <td className="px-6 py-5">{item.id}</td>

      <td className="px-6 py-5 font-medium">
        {item.customer}
      </td>

      <td className="px-6 py-5">
        {item.amount}
      </td>

      <td className="px-6 py-5">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            item.status === "موفق"
              ? "bg-green-100 text-green-600"
              : item.status === "در انتظار"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {item.status}
        </span>
      </td>

      <td className="px-6 py-5 text-gray-500">
        {item.date}
      </td>
    </tr>
  );
};

export default TransactionRow;