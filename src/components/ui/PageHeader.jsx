export default function PageHeader({
  title,
  description,
  children
}) {
  return (
    <header className="bg-white rounded-2xl shadow p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          {title}
        </h1>

        {description && (
          <p className="text-gray-600 mt-1">
            {description}
          </p>
        )}
      </div>

      {children && (
        <div className="flex flex-col sm:flex-row gap-3">
          {children}
        </div>
      )}
    </header>
  );
}