import { Link } from "react-router-dom";
import FaixaDeModo from "../components/FaixaDeModo";
import CardComunicacao from "../components/CardComunicacao";
import { useFavoritos } from "../hooks/useFavoritos";
import { falar } from "../utils/falar";
import { useAuth } from "../contexts/AuthContext";

export default function Favoritos() {
  const {
    favoritos,
    loadingFavoritos,
    erroFavoritos,
    isFavorito,
    alternarFavorito
  } = useFavoritos();

  const { user } = useAuth();

  const favoritosPorCategoria = favoritos.reduce((grupos, item) => {
    const categoria = item.categoria || "Outros";

    if (!grupos[categoria]) {
      grupos[categoria] = [];
    }

    grupos[categoria].push(item);

    return grupos;
  }, {});

  const categorias = Object.keys(favoritosPorCategoria);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <FaixaDeModo texto="Favoritos" cor="#F7DC6F" />

      <main className="pt-28 px-6 lg:px-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center bg-white text-gray-800 px-5 py-3 rounded-xl border-2 border-blue-200 font-bold hover:bg-blue-50 transition-all"
            >
              ← Página inicial
            </Link>
          </div>

          <section className="bg-white rounded-3xl border-4 border-yellow-200 shadow-sm p-6 lg:p-8 mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Comunicações favoritas
            </h1>

            <p className="text-lg text-gray-700 max-w-3xl">
              Aqui estão as comunicações que você marcou como favoritas. Toque em uma delas para ouvir a frase ou toque na estrela para removê-la dos favoritos.
            </p>
          </section>

          {loadingFavoritos && (
            <p className="text-xl font-bold text-gray-700">
              Carregando favoritos...
            </p>
          )}

          {erroFavoritos && (
            <div className="bg-red-50 border-2 border-red-200 text-red-700 rounded-xl p-4 mb-6 font-bold">
              {erroFavoritos}
            </div>
          )}

          {!loadingFavoritos && favoritos.length === 0 && (
            <section className="bg-blue-50 border-4 border-blue-100 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Nenhuma comunicação favorita ainda
              </h2>

              <p className="text-gray-700 mb-6">
                Acesse uma prancha e toque na estrela de uma comunicação para
                salvá-la aqui.
              </p>

              <Link
                to="/"
                className="inline-flex bg-green-200 text-gray-800 font-bold px-6 py-3 rounded-xl hover:bg-green-300 transition-all"
              >
                Ir para página inicial
              </Link>
            </section>
          )}

          {categorias.map((categoria) => (
            <section key={categoria} className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-yellow-200">
                {categoria}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favoritosPorCategoria[categoria].map((item) => (
                  <CardComunicacao
                    key={item.comunicacaoId}
                    item={item}
                    favorito={isFavorito(item.comunicacaoId)}
                    onFalar={() => falar(item.frase, user?.voicePreference)}
                    onFavoritar={() => alternarFavorito(item)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}