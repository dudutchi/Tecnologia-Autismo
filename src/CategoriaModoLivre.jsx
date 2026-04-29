export default function CategoriaModoLivre({
  tituloSecao,
  categorias,
  id
}) {
  return (
  <section
  id={id}
  className="px-6 lg:pl-80 lg:pr-8 pt-28 pb-12"
>

      <h3 className="text-3xl font-bold text-gray-800 mb-8 pb-3 border-b-4 border-blue-200">
        {tituloSecao}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categorias.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl border-4 border-blue-150 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 p-4 flex-1 flex items-center justify-center">
              <img src={item.imagem} alt={item.titulo} className="w-full h-full object-contain"/>
            </div>
            <div className="bg-green-50 px-4 py-3 border-t-2 border-green-200">
              <h4 className="text-lg font-bold text-gray-800">{item.titulo}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


