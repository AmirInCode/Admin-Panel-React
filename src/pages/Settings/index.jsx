import { useState } from "react";
import ToggleGroup from "../../components/ui/ToggleGroup";
import ToggleSwitch from "../../components/ui/ToggleSwitch";

const Settings = () => {
      const [period, setPeriod] = useState("light");

    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl shadow-md p-4 gap-4 ">
                <h2 className="text-xl font-bold">حساب کاربری</h2>

                <form action="" className="mt-3">
                    <div className="flex flex-col">
                        <label htmlFor="name"
                            className="text-gray-400 text-sm">نام</label>
                        <input type="text" id="name" name="name"
                            className="border border-gray-200 rounded-2xl p-2  outline-blue-200" />
                    </div>
                    <div className="flex flex-col my-3">
                        <label htmlFor="name"
                            className="text-gray-400 text-sm">ایمیل</label>
                        <input type="text" id="name" name="name"
                            className="border border-gray-200 rounded-2xl p-2  outline-blue-200" />
                    </div>
                    <button type="submit"
                        className="w-full bg-linear-to-r from-blue-500 to-indigo-500 text-white rounded-2xl py-2 font-bold hover:scale-101 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200">
                        ذخیره تغییرات
                    </button>

                </form>

            </div>

            <div className="bg-white rounded-3xl shadow-md p-4 ">
                <h2 className="text-xl font-bold">اعلان ها</h2>

                <div className="">
                    <ToggleSwitch defaultChecked={true} title="ایمیل تراکنش" />
                    <ToggleSwitch defaultChecked={true} title="پیامک امنیتی" />
                    <ToggleSwitch title="خبرنامه" />
                    <ToggleSwitch defaultChecked={true} title="گزارش هفتگی" />

                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-4 col-span-2">
                <h2 className="text-xl font-bold">ظاهر</h2>

                <div className="mt-3">
                    <ToggleGroup
                        value={period}
                        onChange={setPeriod}
                        options={[
                            {
                                label: "لایت",
                                value: "light",
                            },
                            {
                                label: "تاریک",
                                value: "dark",
                            },
                            {
                                label: "خودکار",
                                value: "auto",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>



    );
}

export default Settings;