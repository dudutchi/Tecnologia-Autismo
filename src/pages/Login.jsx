import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import PasswordInput from "../components/ui/PasswordInput";
import FeedbackMessage from "../components/ui/FeedbackMessage";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
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

    try {
      await login(form.email, form.password);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Erro ao fazer login");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <Card className="w-full max-w-md p-8">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Entrar
          </h1>

          <FeedbackMessage type="error" message={error} />

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

          <Button type="submit" className="w-full">
            Acessar
          </Button>

          <p className="mt-4 text-center">
            <Link to="/esqueci-senha" className="font-bold text-blue-700">
              Esqueci minha senha
            </Link>
          </p>

          <p className="mt-4 text-center text-gray-700">
            Não tem conta?{" "}
            <Link to="/cadastro" className="font-bold text-blue-700">
              Criar conta
            </Link>
          </p>
        </form>
      </Card>
    </main>
  );
}