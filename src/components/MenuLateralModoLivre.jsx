export default function MenuLateralModoLivre({ items }) {
  return (
    <aside className="hidden lg:block w-72 fixed left-0 top-20 min-h-[calc(100vh-5rem)] z-40 bg-blue-50 border-r-4 border-blue-200 px-6 py-8 overflow-y-auto">
      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-lg font-bold text-gray-700 p-3 rounded-lg bg-white border-l-4 border-transparent hover:border-l-blue-400 hover:bg-blue-100 transition-all duration-300"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
