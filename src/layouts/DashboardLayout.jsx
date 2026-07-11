import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar/Sidebar";
import Header from "../components/layout/Header/Header";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-linear-to-bl from-[#F4F7FC] to-[#FCF4FF]">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 overflow-auto p-6">
                    <Outlet />
                </main>
            </div>


        </div>
    );
}

export default DashboardLayout;