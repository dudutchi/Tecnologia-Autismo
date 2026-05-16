import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

import PageContainer from "../components/ui/PageContainer";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import FeedbackMessage from "../components/ui/FeedbackMessage";

export default function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await api.post("/auth/forgot-password", {
        email
      });

      setMessage(response.data.message);
    } catch (error) {
      setError(
        error.response?.data?.message || "Erro ao solicitar recuperação"
      );
    }
  }

  return (
    <PageContainer variant="blue">
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md p-8">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Recuperar senha
            </h1>

            <p className="text-gray-600 mb-6">
              Digite seu e-mail cadastrado. Enviaremos um link para você criar
              uma nova senha.
            </p>

            <FeedbackMessage type="success" message={message} />
            <FeedbackMessage type="error" message={error} />

            <Input
              label="E-mail cadastrado"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <Button type="submit" className="w-full sm:w-full">
              Enviar link de recuperação
            </Button>

            <p className="mt-4 text-center text-gray-700">
              Lembrou sua senha?{" "}
              <Link to="/login" className="font-bold text-blue-700">
                Entrar
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </PageContainer>
  );
}