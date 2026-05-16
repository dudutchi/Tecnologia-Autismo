export default function PageContainer({ children, variant = "gray" }) {
  const backgrounds = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    gray: "bg-gray-50"
  };

  return (
    <main className={`min-h-screen ${backgrounds[variant]} p-4 md:p-6`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </main>
  );
}