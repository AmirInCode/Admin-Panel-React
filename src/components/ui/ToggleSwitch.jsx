import { useState } from "react";

function ToggleSwitch({ title, defaultChecked = false,
  onChange, }) {
    const [enabled, setEnabled] = useState(defaultChecked);

    const handleToggle = () => {
        const newValue = !enabled;
        setEnabled(newValue);

        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="flex justify-between hover:bg-gray-100 p-2 rounded-2xl items-center" onClick={handleToggle}>
            <h3>{title}</h3>

            <button

                className={`relative h-8 w-14 rounded-full transition-colors ${enabled ? "bg-blue-500" : "bg-gray-300"
                    }`}
            >
                <span
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-transform ${enabled ? "translate-x-6" : "translate-x-1"
                        }`}
                />
            </button>
        </div>
    );
}

export default ToggleSwitch;