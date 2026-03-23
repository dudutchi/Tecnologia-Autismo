export default function MenuLateralModoLivre({ items }) {
  return (
    <aside className="hidden lg:block w-64 fixed left-0 top-16 min-h-[calc(100vh-4rem)] z-40 bg-white border-r border-gray-200 px-6 py-8">
      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all w-fit">
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
