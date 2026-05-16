export default function FeedbackMessage({ type = "error", message }) {
  if (!message || String(message).trim() === "") {
    return null;
  }

  const styles = {
    error: "bg-red-100 text-red-700 border-red-200",
    success: "bg-green-100 text-green-700 border-green-200",
    info: "bg-blue-100 text-blue-700 border-blue-200"
  };

  return (
    <p
      className={`
        ${styles[type]}
        border-2
        p-3
        rounded-lg
        mb-4
        font-bold
      `}
    >
      {message}
    </p>
  );
}