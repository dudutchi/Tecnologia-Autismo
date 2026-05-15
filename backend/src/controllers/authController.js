import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

function createToken(userId) {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}

function sendTokenCookie(res, token) {
  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("token", token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
}

export async function register(req, res) {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      message: "Este e-mail já está cadastrado"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  const token = createToken(user._id);

  sendTokenCookie(res, token);

  return res.status(201).json({
    message: "Usuário cadastrado com sucesso",
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({
      message: "E-mail ou senha inválidos"
    });
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) {
    return res.status(401).json({
      message: "E-mail ou senha inválidos"
    });
  }

  const token = createToken(user._id);

  sendTokenCookie(res, token);

  return res.json({
    message: "Login realizado com sucesso",
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
}

export async function me(req, res) {
  const user = await User.findById(req.userId);

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado"
    });
  }

  return res.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
}

export async function logout(req, res) {
  res.clearCookie("token");

  return res.json({
    message: "Logout realizado com sucesso"
  });
}