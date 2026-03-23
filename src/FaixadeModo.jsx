export default function FaixaDeModo({ texto, cor }) {
  return (
    <div
      style={{ background: cor }}
      className="flex justify-between items-center w-full h-16 px-6 text-2xl fixed top-0 left-0 z-50"
    >
      <h2 className="lg:text-3xl">{texto}</h2>

      <button
        className="bg-blue-100 h-10 px-6 rounded-md lg:text-3xl"
      >
        Voltar
      </button>
    </div>
  );
}

