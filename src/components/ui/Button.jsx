export default function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  disabled = false
}) {
  const variants = {
    primary:
      "bg-green-400 text-gray-800 hover:bg-green-500",
    secondary:
      "bg-blue-100 text-gray-800 hover:bg-blue-200",
    neutral:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger:
      "bg-red-100 text-red-700 hover:bg-red-200",
    dangerSolid:
      "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full sm:w-auto
        font-bold
        px-5
        py-3
        rounded-lg
        transition-colors
        focus:outline-none
        focus:ring-4
        focus:ring-blue-300
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}