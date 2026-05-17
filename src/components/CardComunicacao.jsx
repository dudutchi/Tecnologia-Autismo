export default function CardComunicacao({
  item,
  favorito = false,
  onFalar,
  onFavoritar
}) {
  return (
    <article className="relative bg-white rounded-2xl border-4 border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      <button
        type="button"
        onClick={onFavoritar}
        className={`absolute top-3 right-3 z-10 w-12 h-12 rounded-full border-2 text-2xl font-bold flex items-center justify-center shadow-sm transition-all ${
          favorito
            ? "bg-yellow-300 border-yellow-400 text-gray-900"
            : "bg-white border-gray-200 text-gray-400 hover:text-yellow-500 hover:border-yellow-300"
        }`}
        aria-label={
          favorito
            ? `Remover ${item.titulo} dos favoritos`
            : `Adicionar ${item.titulo} aos favoritos`
        }
        title={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        ★
      </button>

      <button
        type="button"
        onClick={onFalar}
        className="w-full h-full text-left flex flex-col focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <div className="bg-gradient-to-br from-blue-100 to-green-100 p-6 min-h-36 flex items-center justify-center">
          {item.emoji ? (
            <span className="text-6xl lg:text-7xl" aria-hidden="true">
              {item.emoji}
            </span>
          ) : (
            <span className="text-4xl font-bold text-gray-700">
              {item.titulo}
            </span>
          )}
        </div>

        <div className="bg-green-50 px-4 py-4 border-t-2 border-green-200 w-full">
          <h3 className="text-lg lg:text-xl font-bold text-gray-800">
            {item.titulo}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {item.frase}
          </p>
        </div>
      </button>
    </article>
  );
}