import { Eye } from "lucide-react";

const CardUser = ({ item }) => {
    return (
        <div className="bg-white shadow rounded-2xl p-4">
            <div className="flex gap-4">
                <span
                    className={`bg-${item.color}-100 text-${item.color}-500 p-2 rounded w-9 h-9 flex justify-center items-center font-bold`}>
                    {item.name[0]}
                </span>
                <div>
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-xs text-gray-400">{item.job}</p>
                </div>
            </div>

            <div className="mt-2">
                <button className="cursor-pointer w-full text-gray-400 transition-all hover:scale-110 duration-300 hover:bg-blue-100 hover:text-blue-500 rounded-lg p-2">

                    <Eye size={15} />
                </button>
            </div>

        </div>
    );
}

export default CardUser;