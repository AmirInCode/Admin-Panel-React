function ToggleGroup({
  options,
  value,
  onChange,
}) {
  return (
    <div className="flex rounded-lg  p-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`rounded-2xl ml-2 cursor-pointer border border-gray-200 px-4 py-2 transition ${
            value === option.value
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default ToggleGroup;