import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FaixaDeModo from "../components/FaixaDeModo";
import { useAuth } from "../contexts/AuthContext";
import { useFavoritos } from "../hooks/useFavoritos";
import { falar } from "../utils/falar";

const letras = [
  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"
];

const acentos = ["Á", "É", "Í", "Ó", "Ú", "Ã", "Õ", "Ç"];

const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function gerarIdDoTexto(texto) {
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export default function Soletrar() {
  const { user } = useAuth();
  const { isFavorito, alternarFavorito } = useFavoritos();

  const [texto, setTexto] = useState("");

  const textoLimpo = texto.trim();

  const itemFavorito = useMemo(() => {
    const idBase = gerarIdDoTexto(textoLimpo);

    return {
      comunicacaoId: `soletrar-${idBase || "texto"}`,
      titulo:
        textoLimpo.length > 30
          ? `${textoLimpo.slice(0, 30)}...`
          : textoLimpo,
      frase: textoLimpo,
      categoria: "Textos soletrados",
      origem: "Soletrar",
      emoji: "🔤"
    };
  }, [textoLimpo]);

  const textoFavoritado = textoLimpo
    ? isFavorito(itemFavorito.comunicacaoId)
    : false;

  function adicionarCaractere(caractere) {
    setTexto((textoAtual) => `${textoAtual}${caractere}`);
  }

  function adicionarEspaco() {
    setTexto((textoAtual) => `${textoAtual} `);
  }

  function apagarUltimo() {
    setTexto((textoAtual) => textoAtual.slice(0, -1));
  }

  function limparTexto() {
    setTexto("");
  }

  function falarTexto() {
    if (!textoLimpo) {
      return;
    }

    falar(textoLimpo, user?.voicePreference);
  }

  function favoritarTexto() {
    if (!textoLimpo) {
      return;
    }

    alternarFavorito(itemFavorito);
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <FaixaDeModo texto="Soletrar" cor="#58D68D" />

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

          <section className="bg-white rounded-3xl border-4 border-green-200 shadow-sm p-6 lg:p-8 mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Soletrar
            </h1>

            <p className="text-lg text-gray-700 max-w-3xl">
              Monte palavras ou frases usando as letras abaixo. Depois, toque em
              falar para o sistema reproduzir o texto.
            </p>
          </section>

          <section className="bg-white rounded-3xl border-4 border-blue-100 shadow-sm p-6 lg:p-8 mb-10">
            <label
              htmlFor="textoSoletrado"
              className="block text-xl font-bold text-gray-800 mb-3"
            >
              Texto montado
            </label>

            <textarea
              id="textoSoletrado"
              value={texto}
              onChange={(event) => setTexto(event.target.value)}
              placeholder="Monte uma palavra ou frase..."
              className="w-full min-h-32 rounded-2xl border-4 border-blue-100 p-4 text-2xl font-bold text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 resize-none"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
              <button
                type="button"
                onClick={falarTexto}
                disabled={!textoLimpo}
                className="bg-green-200 text-gray-900 font-bold px-5 py-4 rounded-xl hover:bg-green-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🔊 Falar texto
              </button>

              <button
                type="button"
                onClick={favoritarTexto}
                disabled={!textoLimpo}
                className={`font-bold px-5 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed ${
                  textoFavoritado
                    ? "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
                    : "bg-yellow-100 text-gray-800 hover:bg-yellow-200"
                }`}
              >
                {textoFavoritado ? "★ Remover favorito" : "★ Favoritar texto"}
              </button>

              <button
                type="button"
                onClick={apagarUltimo}
                disabled={!texto}
                className="bg-blue-100 text-gray-800 font-bold px-5 py-4 rounded-xl hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ⌫ Apagar
              </button>

              <button
                type="button"
                onClick={limparTexto}
                disabled={!texto}
                className="bg-red-100 text-red-700 font-bold px-5 py-4 rounded-xl hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Limpar
              </button>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-blue-200">
              Letras
            </h2>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {letras.map((letra) => (
                <button
                  key={letra}
                  type="button"
                  onClick={() => adicionarCaractere(letra)}
                  className="bg-white border-4 border-blue-100 rounded-2xl min-h-20 text-3xl font-bold text-gray-800 hover:bg-blue-50 hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  {letra}
                </button>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-blue-200">
              Acentos
            </h2>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {acentos.map((letra) => (
                <button
                  key={letra}
                  type="button"
                  onClick={() => adicionarCaractere(letra)}
                  className="bg-white border-4 border-green-100 rounded-2xl min-h-20 text-3xl font-bold text-gray-800 hover:bg-green-50 hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-green-300"
                >
                  {letra}
                </button>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-blue-200">
              Números
            </h2>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {numeros.map((numero) => (
                <button
                  key={numero}
                  type="button"
                  onClick={() => adicionarCaractere(numero)}
                  className="bg-white border-4 border-blue-100 rounded-2xl min-h-20 text-3xl font-bold text-gray-800 hover:bg-blue-50 hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  {numero}
                </button>
              ))}

              <button
                type="button"
                onClick={adicionarEspaco}
                className="col-span-2 bg-green-100 border-4 border-green-200 rounded-2xl min-h-20 text-xl font-bold text-gray-800 hover:bg-green-200 hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Espaço
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}