import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Cadastro() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
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
      await register(form.name, form.email, form.password);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Erro ao cadastrar");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Criar conta
        </h1>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </p>
        )}

        <label className="block font-bold mb-2">Nome</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
          required
        />

        <label className="block font-bold mb-2">E-mail</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
          required
        />

        <label className="block font-bold mb-2">Senha</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
          minLength="6"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-300 text-gray-800 font-bold py-3 rounded-lg"
        >
          Cadastrar
        </button>

        <p className="mt-4 text-center">
          Já tem conta?{" "}
          <Link to="/login" className="font-bold text-blue-700">
            Entrar
          </Link>
        </p>
      </form>
    </main>
  );
}