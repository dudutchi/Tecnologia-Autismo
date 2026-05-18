import { Link } from "react-router-dom";
import FaixaDeModo from "../components/FaixaDeModo";
import CardComunicacao from "../components/CardComunicacao";
import { gruposDePalavrasEssenciais } from "../data/palavrasEssenciaisData";
import { useFavoritos } from "../hooks/useFavoritos";
import { useAuth } from "../contexts/AuthContext";
import { falar } from "../utils/falar";

export default function PalavrasEssenciais() {
  const { user } = useAuth();
  const { isFavorito, alternarFavorito } = useFavoritos();

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <FaixaDeModo texto="Palavras Essenciais" cor="#58D68D" />

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
              Palavras Essenciais
            </h1>

            <p className="text-lg text-gray-700 max-w-3xl">
              Use palavras e frases curtas para responder rapidamente, pedir
              ajuda, fazer perguntas ou comunicar necessidades importantes.
            </p>
          </section>

          {gruposDePalavrasEssenciais.map((grupo) => (
            <section key={grupo.titulo} className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-blue-200">
                {grupo.titulo}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {grupo.comunicacoes.map((comunicacao) => {
                  const item = {
                    comunicacaoId: comunicacao.comunicacaoId,
                    titulo: comunicacao.titulo,
                    frase: comunicacao.frase,
                    categoria: grupo.titulo,
                    origem: "Palavras Essenciais",
                    emoji: comunicacao.emoji
                  };

                  return (
                    <CardComunicacao
                      key={item.comunicacaoId}
                      item={item}
                      favorito={isFavorito(item.comunicacaoId)}
                      onFalar={() =>
                        falar(item.frase, user?.voicePreference)
                      }
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