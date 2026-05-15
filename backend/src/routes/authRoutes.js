import express from "express";
import { body } from "express-validator";
import {
  register,
  login,
  me,
  logout
} from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("name").trim().notEmpty().withMessage("Nome é obrigatório"),
    body("email").isEmail().withMessage("E-mail inválido"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter pelo menos 6 caracteres")
  ],
  validate,
  register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("E-mail inválido"),
    body("password").notEmpty().withMessage("Senha é obrigatória")
  ],
  validate,
  login
);

router.get("/me", authMiddleware, me);

router.post("/logout", authMiddleware, logout);

export default router;