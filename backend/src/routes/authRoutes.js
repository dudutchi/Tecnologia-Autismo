import express from "express";
import { body } from "express-validator";
import {
  register,
  login,
  me,
  logout,
  forgotPassword,
  resetPassword
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

router.post(
  "/forgot-password",
  [
    body("email")
      .isEmail()
      .withMessage("E-mail inválido")
  ],
  validate,
  forgotPassword
);

router.post(
  "/reset-password/:token",
  [
    body("password")
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter pelo menos 6 caracteres")
  ],
  validate,
  resetPassword
);

export default router;