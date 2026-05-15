import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    title: {
      type: String,
      required: [true, "O título é obrigatório"],
      trim: true
    },

    description: {
      type: String,
      default: "",
      trim: true
    },

    date: {
      type: String,
      required: [true, "A data é obrigatória"]
    },

    time: {
      type: String,
      required: [true, "O horário é obrigatório"]
    },

    status: {
      type: String,
      enum: ["pendente", "concluido"],
      default: "pendente"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Reminder", reminderSchema);