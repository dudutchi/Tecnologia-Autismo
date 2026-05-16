import { useState } from "react";

function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l18 18"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-.58"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.88 5.25A10.66 10.66 0 0112 5.03c6 0 9.75 6.97 9.75 6.97a18.18 18.18 0 01-3.03 3.82"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.11 6.11C3.6 7.85 2.25 12 2.25 12s3.75 6.97 9.75 6.97c1.45 0 2.78-.36 3.94-.94"
      />
    </svg>
  );
}

export default function PasswordInput({
  label,
  name,
  value,
  onChange,
  required = false,
  minLength = 6
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block font-bold text-gray-800 mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          className="w-full border-2 border-gray-300 rounded-lg p-3 pr-14 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 inset-y-0 flex items-center justify-center text-gray-500 hover:text-gray-800"
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          title={showPassword ? "Ocultar senha" : "Mostrar senha"}
        >
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>
    </div>
  );
}