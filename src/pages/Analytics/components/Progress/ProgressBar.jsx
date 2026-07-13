const ProgressBar = ({ data, title = "منابع ترافیک" }) => {
    return (
        <div className="w-full flex-1 rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="mb-8 text-right text-xl font-bold">
                {title}
            </h2>

            <div className="space-y-6">
                {data.map((item) => (
                    <div key={item.title}>
                        {/* عنوان و درصد */}
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-400">
                                %{item.percent}
                            </span>

                            <span className="text-sm font-semibold text-slate-800">
                                {item.title}
                            </span>
                        </div>

                        {/* Progress */}
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                            <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                    width: `${item.percent}%`,
                                    backgroundColor: item.color,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProgressBar;