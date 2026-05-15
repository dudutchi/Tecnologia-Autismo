import express from "express";
import { body } from "express-validator";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/validate.js";
import {
  updateProfile,
  changePassword,
  deleteProfile
} from "../controllers/userController.js";

const router = express.Router();

router.use(authMiddleware);

router.put(
  "/profile",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Nome é obrigatório"),

    body("email")
      .isEmail()
      .withMessage("E-mail inválido")
  ],
  validate,
  updateProfile
);

router.put(
  "/password",
  [
    body("currentPassword")
      .notEmpty()
      .withMessage("Senha atual é obrigatória"),

    body("newPassword")
      .isLength({ min: 6 })
      .withMessage("A nova senha precisa ter pelo menos 6 caracteres")
  ],
  validate,
  changePassword
);

router.delete(
  "/profile",
  [
    body("password")
      .notEmpty()
      .withMessage("A senha é obrigatória para excluir o perfil")
  ],
  validate,
  deleteProfile
);

export default router;