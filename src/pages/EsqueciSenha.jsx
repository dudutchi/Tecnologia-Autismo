import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

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
    <main className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Recuperar senha
        </h1>

        <p className="text-gray-600 mb-6">
          Informe seu e-mail cadastrado. Enviaremos um link para criar uma nova senha.
        </p>

        {message && (
          <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
            {message}
          </p>
        )}

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </p>
        )}

        <label className="block font-bold mb-2">
          E-mail
        </label>

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-400 text-gray-800 font-bold py-3 rounded-lg"
        >
          Enviar link de recuperação
        </button>

        <p className="mt-4 text-center">
          Lembrou a senha?{" "}
          <Link to="/login" className="font-bold text-blue-700">
            Entrar
          </Link>
        </p>
      </form>
    </main>
  );
}