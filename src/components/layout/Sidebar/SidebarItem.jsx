import clsx from "clsx";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, setSidebarOpen }) => {
    const Icon = item.icon;
    return (
        <NavLink
            to={item.path}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
                clsx(
                    "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 font-bold",
                    isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-100"
                )
            }
        >

            {({ isActive }) => (
                <>
                    <span
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        <Icon size={20} />
                    </span>

                    <span>{item.title}</span>
                </>
            )}



        </NavLink>
    );
}

export default SidebarItem;