import { Bell, ChevronDown, Menu, Plus, Search, UserCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageTitles = {
    "/": "داشبورد",
    "/users": "کاربران",
    "/transactions": "تراکنش‌ها",
    "/analytics": "تحلیل‌ها",
    "/settings": "تنظیمات",
};

const Header = ({setSidebarOpen}) => {

    const { pathname } = useLocation();


    return (

        <header className="flex h-20 items-center justify-between rounded-3xl border border-gray-200 bg-white px-6 shadow-sm">
            {/* Right  */}
            <div className="flex items-center gap-4">
                <button className="rounded-xl p-2 hover:bg-gray-100 lg:hidden"
                onClick={() => setSidebarOpen(true)}>
                    <Menu size={22} />  
                </button>
                <div>
                    <h1 className="text-xl font-bold text-gray-800">
                        {pageTitles[pathname]}
                    </h1>
                    <p className="text-xs text-gray-500">
                        خوش اومدی، روز خوبی داشته باشی 👋
                    </p>
                </div>
            </div>

            {/* search  */}
            <div className="hidden w-full max-w-md lg:block">
                <div className="flex h-12 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4">
                    <Search />
                    <input type="text"
                        placeholder='جستجو ...'
                        className="w-full bg-transparent text-sm outline-none" />
                </div>
            </div>
            {/* left */}
            <div className="flex items-center gap-3">

                <button className="flex h-12 items-center gap-2 rounded-2xl bg-blue-600 px-4 text-white transition hover:bg-blue-700">
                    <Plus size={18} />
                    <span className="hidden md:block">تراکنش جدید</span>
                </button>

                <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 hover:bg-gray-100">
                    <Bell size={20} />

                    <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500"></span>
                </button>

                <button className="flex items-center gap-3 rounded-2xl border border-gray-200 p-1 hover:bg-gray-100">
                    <UserCircle2 size={36} className="text-gray-500" />

                    <div className="hidden text-right md:block">
                        <p className="font-semibold">امیر</p>
                        <p className="text-xs text-gray-500">مدیر سیستم</p>
                    </div>

                    <ChevronDown
                        size={18}
                        className="hidden text-gray-500 md:block"
                    />
                </button>


            </div>

        </header>
    );
}

export default Header;