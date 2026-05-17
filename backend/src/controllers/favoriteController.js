import Favorite from "../models/Favorite.js";

export async function listFavorites(req, res) {
  const favorites = await Favorite.find({
    user: req.userId
  }).sort({
    categoria: 1,
    titulo: 1
  });

  return res.json(favorites);
}

export async function createFavorite(req, res) {
  const {
    comunicacaoId,
    titulo,
    frase,
    categoria,
    origem,
    emoji,
    imagem
  } = req.body;

  const favorite = await Favorite.findOneAndUpdate(
    {
      user: req.userId,
      comunicacaoId
    },
    {
      user: req.userId,
      comunicacaoId,
      titulo,
      frase,
      categoria,
      origem,
      emoji,
      imagem
    },
    {
      new: true,
      upsert: true,
      runValidators: true
    }
  );

  return res.status(201).json(favorite);
}

export async function deleteFavorite(req, res) {
  const favorite = await Favorite.findOneAndDelete({
    user: req.userId,
    comunicacaoId: req.params.comunicacaoId
  });

  if (!favorite) {
    return res.status(404).json({
      message: "Favorito não encontrado"
    });
  }

  return res.json({
    message: "Favorito removido com sucesso"
  });
}