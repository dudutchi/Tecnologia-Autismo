export default function Card({ children, className = "" }) {
  return (
    <section
      className={`bg-white rounded-2xl shadow p-6 ${className}`}
    >
      {children}
    </section>
  );
}