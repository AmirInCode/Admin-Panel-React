import { Server, SidebarIcon, X } from "lucide-react";
import sidebarData from "./sidebarData";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

    return (
        <>
            <div
                onClick={() => setSidebarOpen(false)}
                className={`
            fixed inset-0 bg-black/40 z-40 transition-opacity
            lg:hidden
            ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
            />

            <aside className={`
            fixed top-0 right-0 h-screen
            w-4/5
            max-w-sm
            bg-white
            border-l
            border-gray-200
            z-50
            transform
            transition-transform
            duration-300
            lg:translate-x-0
            lg:static
            lg:w-72

            ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}>

                <div className="h-full bg-white border-l border-gray-200 flex flex-col p-5">



                    <div className="flex items-center mb-8 justify-between">
                        <div className="flex gap-3">

                            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                                <SidebarIcon />
                            </div>

                            <div>
                                <h2 className="font-bold text-lg">پنل مدیریت</h2>
                                <p className="text-sm text-gray-500">نسخه لایت</p>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <button className="border border-gray-200 rounded-2xl p-2 cursor-pointer hover:shadow-blue-500 hover:shadow-2xl hover:border-blue-200"
                            onClick={()=>setSidebarOpen(false)}>

                                <X />
                            </button>
                        </div>
                    </div>

                    <p className="text-xs text-gray-400 mb-2">
                        منوی اصلی
                    </p>
                    <nav className="flex flex-col gap-2">
                        {sidebarData.map((item) => (
                            <SidebarItem setSidebarOpen={setSidebarOpen} key={item.id} item={item} />
                        ))}

                    </nav>
                    <div className="mt-auto flex gap-3 bg-green-50 rounded-2xl p-4 text-green-700">
                        <Server />
                        <span className="font-bold text-xs">وضعیت سرور</span>

                        آنلاین 99.9%
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;