import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

import PageContainer from "../components/ui/PageContainer";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import PasswordInput from "../components/ui/PasswordInput";
import FeedbackMessage from "../components/ui/FeedbackMessage";

export default function RedefinirSenha() {
  const { token } = useParams();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      const response = await api.post(`/auth/reset-password/${token}`, {
        password: form.password
      });

      setMessage(response.data.message);

      setForm({
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      setError(
        error.response?.data?.message || "Erro ao redefinir senha"
      );
    }
  }

  return (
    <PageContainer variant="green">
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md p-8">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Criar nova senha
            </h1>

            <p className="text-gray-600 mb-6">
              Digite e confirme sua nova senha para voltar a acessar sua conta.
            </p>

            <FeedbackMessage type="success" message={message} />
            <FeedbackMessage type="error" message={error} />

            <PasswordInput
              label="Nova senha"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <PasswordInput
              label="Confirmar nova senha"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <Button type="submit" className="w-full sm:w-full">
              Alterar senha
            </Button>

            <p className="mt-4 text-center text-gray-700">
              <Link to="/login" className="font-bold text-blue-700">
                Voltar para o login
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </PageContainer>
  );
}