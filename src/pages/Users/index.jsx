import { Plus } from "lucide-react";
import CardUser from "./components/CardUser";
import carduserdata from "./carduserData";

const Users = () => {
    return (
        <section className="bg-[#FAFAFB] rounded-2xl shadow p-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-bold">لیست کاربران</h2>
                    <p className="text-xs text-gray-400 font-bold">8 کاربر نمونه</p>
                </div>
                <button className="flex bg-blue-600 text-white rounded-2xl px-3 py-2 transition-all
    duration-300
    ease-out
    hover:scale-105
    hover:bg-blue-500
    hover:shadow-[0_0_25px_rgba(59,130,246,0.45)]">
                    <Plus />
                    <span>
                        کاربران جدید
                    </span>
                </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    carduserdata.map((item)=>(
                        <CardUser item={item}/>
                    ))
                }
                
                
                
            </div>
        </section>
    );
}

export default Users;