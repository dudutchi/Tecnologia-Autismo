import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    comunicacaoId: {
      type: String,
      required: [true, "O ID da comunicação é obrigatório"],
      trim: true
    },

    titulo: {
      type: String,
      required: [true, "O título é obrigatório"],
      trim: true
    },

    frase: {
      type: String,
      required: [true, "A frase é obrigatória"],
      trim: true
    },

    categoria: {
      type: String,
      required: [true, "A categoria é obrigatória"],
      trim: true
    },

    origem: {
      type: String,
      default: "",
      trim: true
    },

    emoji: {
      type: String,
      default: ""
    },

    imagem: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

favoriteSchema.index(
  {
    user: 1,
    comunicacaoId: 1
  },
  {
    unique: true
  }
);

export default mongoose.model("Favorite", favoriteSchema);