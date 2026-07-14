import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar/Sidebar";
import Header from "../components/layout/Header/Header";
import { useState } from "react";

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-linear-to-bl from-[#F4F7FC] to-[#FCF4FF]">
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex flex-1 flex-col">
                <Header
                    setSidebarOpen={setSidebarOpen}
                />
                <main className="flex-1 overflow-auto p-6">
                    <Outlet />
                </main>
            </div>


        </div>
    );
}

export default DashboardLayout;