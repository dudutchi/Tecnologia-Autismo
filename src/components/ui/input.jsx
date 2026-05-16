export default function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  minLength,
  placeholder = ""
}) {
  return (
    <div className="mb-4">
      <label className="block font-bold text-gray-800 mb-2">
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        placeholder={placeholder}
        className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}