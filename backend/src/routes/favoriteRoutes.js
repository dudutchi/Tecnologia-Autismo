import express from "express";
import { body } from "express-validator";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/validate.js";
import {
  listFavorites,
  createFavorite,
  deleteFavorite
} from "../controllers/favoriteController.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", listFavorites);

router.post(
  "/",
  [
    body("comunicacaoId")
      .trim()
      .notEmpty()
      .withMessage("ID da comunicação é obrigatório"),

    body("titulo")
      .trim()
      .notEmpty()
      .withMessage("Título é obrigatório"),

    body("frase")
      .trim()
      .notEmpty()
      .withMessage("Frase é obrigatória"),

    body("categoria")
      .trim()
      .notEmpty()
      .withMessage("Categoria é obrigatória")
  ],
  validate,
  createFavorite
);

router.delete("/:comunicacaoId", deleteFavorite);

export default router;