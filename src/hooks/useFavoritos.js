import { useEffect, useState } from "react";
import api from "../services/api";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const [loadingFavoritos, setLoadingFavoritos] = useState(true);
  const [erroFavoritos, setErroFavoritos] = useState("");

  async function carregarFavoritos() {
    try {
      setErroFavoritos("");

      const response = await api.get("/favoritos");

      setFavoritos(response.data);
    } catch (error) {
      setErroFavoritos(
        error.response?.data?.message || "Erro ao carregar favoritos"
      );
    } finally {
      setLoadingFavoritos(false);
    }
  }

  useEffect(() => {
    carregarFavoritos();
  }, []);

  function isFavorito(comunicacaoId) {
    return favoritos.some(
      (favorito) => favorito.comunicacaoId === comunicacaoId
    );
  }

  async function alternarFavorito(item) {
    const jaFavoritado = isFavorito(item.comunicacaoId);

    if (jaFavoritado) {
      await api.delete(`/favoritos/${item.comunicacaoId}`);

      setFavoritos((favoritosAtuais) =>
        favoritosAtuais.filter(
          (favorito) => favorito.comunicacaoId !== item.comunicacaoId
        )
      );

      return;
    }

    const response = await api.post("/favoritos", item);

    setFavoritos((favoritosAtuais) => [
      ...favoritosAtuais,
      response.data
    ]);
  }

  return {
    favoritos,
    loadingFavoritos,
    erroFavoritos,
    carregarFavoritos,
    isFavorito,
    alternarFavorito
  };
}