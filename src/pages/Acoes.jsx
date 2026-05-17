import { Link } from "react-router-dom";
import FaixaDeModo from "../components/FaixaDeModo";
import { gruposDeAcoes } from "../data/acoesData";
import CardComunicacao from "../components/CardComunicacao";
import { useFavoritos } from "../hooks/useFavoritos";
import { falar as falarComVoz } from "../utils/falar";
import { useAuth } from "../contexts/AuthContext";

export default function Acoes() {

  const { isFavorito, alternarFavorito } = useFavoritos();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <FaixaDeModo texto="Ações" cor="#58D68D" />

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

          <section className="bg-white rounded-3xl border-4 border-green-200 shadow-sm p-6 lg:p-8 mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Ações
            </h1>

            <p className="text-lg text-gray-700 max-w-3xl">
              Escolha uma ação para comunicar o que você quer fazer, o que
              precisa ou o que está acontecendo. Ao clicar em um card, o sistema
              fala a frase selecionada.
            </p>
          </section>

          {gruposDeAcoes.map((grupo) => (
            <section key={grupo.titulo} className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-blue-200">
                {grupo.titulo}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {grupo.acoes.map((acao) => {
                  const item = {
                    comunicacaoId: acao.comunicacaoId,
                    titulo: acao.titulo,
                    frase: acao.frase,
                    categoria: grupo.titulo,
                    origem: "Ações",
                    emoji: acao.emoji
                  };

                  return (
                    <CardComunicacao
                      key={item.comunicacaoId}
                      item={item}
                      favorito={isFavorito(item.comunicacaoId)}
                      onFalar={() => falarComVoz(item.frase, user?.voicePreference)}
                      onFavoritar={() => alternarFavorito(item)}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}