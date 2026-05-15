import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";

const emptyForm = {
  title: "",
  description: "",
  date: "",
  time: "",
  status: "pendente"
};

export default function Lembretes() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [reminders, setReminders] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const [reminderToDelete, setReminderToDelete] = useState(null);

  async function loadReminders() {
    const response = await api.get("/lembretes");
    setReminders(response.data);
  }

  useEffect(() => {
    loadReminders();
  }, []);

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
      if (editingId) {
        await api.put(`/lembretes/${editingId}`, form);
      } else {
        await api.post("/lembretes", form);
      }

      setForm(emptyForm);
      setEditingId(null);
      loadReminders();
    } catch (error) {
      setError(error.response?.data?.message || "Erro ao salvar lembrete");
    }
  }

  function handleEdit(reminder) {
    setEditingId(reminder._id);

    setForm({
      title: reminder.title,
      description: reminder.description || "",
      date: reminder.date,
      time: reminder.time,
      status: reminder.status
    });
  }

 function handleDelete(reminder) {
   setReminderToDelete(reminder);
}

async function confirmDeleteReminder() {
    if (!reminderToDelete) return;

    await api.delete(`/lembretes/${reminderToDelete._id}`);

    setReminderToDelete(null);
    loadReminders();
}

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

return (
    <main className="min-h-screen bg-gray-50 p-6">
        <header className="bg-white rounded-2xl shadow p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold text-gray-800">
            Meus lembretes
            </h1>

            <p className="text-gray-600">
            Aqui estão os seus lembretes, {user?.name}! <br />
            Você pode adicionar novos lembretes, editar ou excluir os existentes. <br />
            Use o formulário abaixo para gerenciar seus lembretes e mantenha-se organizado!
            </p>
        </div>

        <div className="flex gap-3">
            <Link
            to="/"
            className="bg-blue-100 text-gray-800 font-bold px-4 py-3 rounded-lg"
            >
            Página inicial
            </Link>

        </div>
        </header>

        <section className="grid lg:grid-cols-2 gap-6">
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow p-6"
        >
            <h2 className="text-2xl font-bold mb-4">
            {editingId ? "Editar lembrete" : "Adicionar lembrete"}
            </h2>

            {error && (
            <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                {error}
            </p>
            )}

            <label className="block font-bold mb-2">Título</label>
            <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
            required
            />

            <label className="block font-bold mb-2">Descrição</label>
            <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
            rows="4"
            />

            <label className="block font-bold mb-2">Data</label>
            <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
            required
            />

            <label className="block font-bold mb-2">Horário</label>
            <input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
            required
            />

            <label className="block font-bold mb-2">Status</label>
            <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
            >
            <option value="pendente">Pendente</option>
            <option value="concluido">Concluído</option>
            </select>

            <button
            type="submit"
            className="w-full bg-green-400 text-gray-800 font-bold py-3 rounded-lg"
            >
            {editingId ? "Salvar alterações" : "Adicionar lembrete"}
            </button>

            {editingId && (
            <button
                type="button"
                onClick={() => {
                setEditingId(null);
                setForm(emptyForm);
                }}
                className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg mt-3"
            >
                Cancelar edição
            </button>
            )}
        </form>

        <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
            Lembretes cadastrados
            </h2>

            {reminders.length === 0 && (
            <p className="text-gray-600">
                Nenhum lembrete cadastrado ainda.
            </p>
            )}

            <div className="flex flex-col gap-4">
            {reminders.map((reminder) => (
                <article
                key={reminder._id}
                className="border-2 border-blue-100 rounded-xl p-4 bg-blue-50"
                >
                <h3 className="text-xl font-bold text-gray-800">
                    {reminder.title}
                </h3>

                <p className="text-gray-700">
                    {reminder.description}
                </p>

                <p className="font-bold mt-2">
                    Data: {reminder.date} às {reminder.time}
                </p>

                <p>
                    Status:{" "}
                    <span className="font-bold">
                    {reminder.status}
                    </span>
                </p>

                <div className="flex gap-3 mt-4">
                    <button
                    onClick={() => handleEdit(reminder)}
                    className="bg-yellow-100 text-yellow-800 font-bold px-4 py-2 rounded-lg"
                    >
                    Editar
                    </button>

                    <button
                    onClick={() => handleDelete(reminder)}
                    className="bg-red-100 text-red-700 font-bold px-4 py-2 rounded-lg"
                    >
                    Excluir
                    </button>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>

        {reminderToDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Excluir lembrete?
            </h2>

            <p className="text-gray-700 mb-2">
                Você tem certeza que deseja excluir este lembrete?
            </p>

            <p className="font-bold text-gray-800 mb-6">
                {reminderToDelete.title}
            </p>

            <div className="flex gap-3 justify-end">
                <button
                type="button"
                onClick={() => setReminderToDelete(null)}
                className="bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded-lg"
                >
                Cancelar
                </button>

                <button
                type="button"
                onClick={confirmDeleteReminder}
                className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg"
                >
                Sim, excluir
                </button>
            </div>
            </div>
        </div>
        )}
    </main>
);
}