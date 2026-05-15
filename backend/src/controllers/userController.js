import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Reminder from "../models/Reminder.js";

export async function updateProfile(req, res) {
  const { name, email } = req.body;

  const user = await User.findById(req.userId);

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado"
    });
  }

  if (email && email !== user.email) {
    const emailAlreadyExists = await User.findOne({
      email,
      _id: { $ne: req.userId }
    });

    if (emailAlreadyExists) {
      return res.status(400).json({
        message: "Este e-mail já está sendo usado por outro usuário"
      });
    }
  }

  user.name = name || user.name;
  user.email = email || user.email;

  await user.save();

  return res.json({
    message: "Perfil atualizado com sucesso",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl
    }
  });
}

export async function changePassword(req, res) {
  const { currentPassword, newPassword } = req.body;

  const user = await User.findById(req.userId).select("+password");

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado"
    });
  }

  const passwordIsCorrect = await bcrypt.compare(
    currentPassword,
    user.password
  );

  if (!passwordIsCorrect) {
    return res.status(400).json({
      message: "Senha atual incorreta"
    });
  }

  user.password = await bcrypt.hash(newPassword, 12);

  await user.save();

  return res.json({
    message: "Senha alterada com sucesso"
  });
}

export async function deleteProfile(req, res) {
  const { password } = req.body;

  const user = await User.findById(req.userId).select("+password");

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado"
    });
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) {
    return res.status(400).json({
      message: "Senha incorreta"
    });
  }

  await Reminder.deleteMany({
    user: req.userId
  });

  await User.findByIdAndDelete(req.userId);

  res.clearCookie("token");

  return res.json({
    message: "Perfil excluído com sucesso"
  });
}