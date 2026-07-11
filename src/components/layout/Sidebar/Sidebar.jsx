import { Server, SidebarIcon } from "lucide-react";
import sidebarData from "./sidebarData";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    return (
        <aside className="w-72 h-screen bg-white border-l border-gray-200 flex flex-col p-5">

            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                    <SidebarIcon />
                </div>

                <div>
                    <h2 className="font-bold text-lg">پنل مدیریت</h2>
                    <p className="text-sm text-gray-500">نسخه لایت</p>
                </div>
            </div>

            <p className="text-xs text-gray-400 mb-2">
                منوی اصلی
            </p>
            <nav className="flex flex-col gap-2">
                {sidebarData.map((item) => (
                    <SidebarItem key={item.id} item={item} />
                ))}

            </nav>
            <div className="mt-auto flex gap-3 bg-green-50 rounded-2xl p-4 text-green-700">
                <Server />
                <span className="font-bold text-xs">وضعیت سرور</span>
                
                آنلاین 99.9%
            </div>
        </aside>
    );
}

export default Sidebar;