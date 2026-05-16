import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import PasswordInput from "../components/ui/PasswordInput";
import FeedbackMessage from "../components/ui/FeedbackMessage";

export default function Cadastro() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      await register(form.name, form.email, form.password);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Erro ao cadastrar");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <Card className="w-full max-w-md p-8">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Criar conta
          </h1>

          <p className="text-gray-600 mb-6">
            Preencha os dados abaixo para acessar o sistema.
          </p>

          <FeedbackMessage type="error" message={error} />

          <Input
            label="Nome"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <Input
            label="E-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <PasswordInput
            label="Senha"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <PasswordInput
            label="Confirmar senha"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button type="submit" className="w-full">
            Cadastrar
          </Button>

          <p className="mt-4 text-center text-gray-700">
            Já tem conta?{" "}
            <Link to="/login" className="font-bold text-blue-700">
              Entrar
            </Link>
          </p>
        </form>
      </Card>
    </main>
  );
}