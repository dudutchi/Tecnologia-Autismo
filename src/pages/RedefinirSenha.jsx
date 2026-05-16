import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l18 18"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-.58"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.88 5.25A10.66 10.66 0 0112 5.03c6 0 9.75 6.97 9.75 6.97a18.18 18.18 0 01-3.03 3.82"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.11 6.11C3.6 7.85 2.25 12 2.25 12s3.75 6.97 9.75 6.97c1.45 0 2.78-.36 3.94-.94"
      />
    </svg>
  );
}

export default function RedefinirSenha() {
  const { token } = useParams();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    <main className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Criar nova senha
        </h1>

        <p className="text-gray-600 mb-6">
          Digite e confirme sua nova senha.
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
          Nova senha
        </label>

        <div className="relative mb-4">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 pr-14"
            minLength="6"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 inset-y-0 flex items-center justify-center text-gray-500 hover:text-gray-800"
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            title={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        </div>

        <label className="block font-bold mb-2">
          Confirmar nova senha
        </label>

        <div className="relative mb-4">
          <input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 pr-14"
            minLength="6"
            required
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 inset-y-0 flex items-center justify-center text-gray-500 hover:text-gray-800"
            aria-label={
              showConfirmPassword
                ? "Ocultar confirmação de senha"
                : "Mostrar confirmação de senha"
            }
            title={
              showConfirmPassword
                ? "Ocultar confirmação de senha"
                : "Mostrar confirmação de senha"
            }
          >
            {showConfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-300 text-gray-800 font-bold py-3 rounded-lg"
        >
          Alterar senha
        </button>

        <p className="mt-4 text-center">
          <Link to="/login" className="font-bold text-blue-700">
            Voltar para o login
          </Link>
        </p>
      </form>
    </main>
  );
}