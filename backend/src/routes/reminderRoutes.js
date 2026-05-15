import express from "express";
import { body } from "express-validator";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/validate.js";
import {
  createReminder,
  listReminders,
  updateReminder,
  deleteReminder
} from "../controllers/reminderController.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", listReminders);

router.post(
  "/",
  [
    body("title").trim().notEmpty().withMessage("Título é obrigatório"),
    body("date").notEmpty().withMessage("Data é obrigatória"),
    body("time").notEmpty().withMessage("Horário é obrigatório"),
    body("status")
      .optional()
      .isIn(["pendente", "concluido"])
      .withMessage("Status inválido")
  ],
  validate,
  createReminder
);

router.put(
  "/:id",
  [
    body("title").optional().trim().notEmpty().withMessage("Título não pode ficar vazio"),
    body("status")
      .optional()
      .isIn(["pendente", "concluido"])
      .withMessage("Status inválido")
  ],
  validate,
  updateReminder
);

router.delete("/:id", deleteReminder);

export default router;