export default function CategoriaModoLivre({
  tituloSecao,
  categorias,
  id
}) {
  return (
  <section
  id={id}
  className="pl-40 pr-6 max-w-7xl pt-20"
>

      {/* Título da seção */}
      <h3 className="text-left font-bold text-gray-900 mb-6">
        {tituloSecao}
      </h3>

      {/* Grid de cards */}
      <div className="grid grid-cols-4 gap-8">
        {categorias.map((item, index) => (
          <div key={index}>
            <h4 className="sr-only">{item.titulo}</h4>
            <img src={item.imagem} alt={item.titulo} className="block w-full h-auto object-countain"/>
          </div>
        ))}
      </div>
    </section>
  );
}


