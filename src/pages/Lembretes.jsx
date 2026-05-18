import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";

import PageContainer from "../components/ui/PageContainer";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import FeedbackMessage from "../components/ui/FeedbackMessage";

import { falar } from "../utils/falar";

const emptyForm = {
  title: "",
  description: "",
  date: "",
  time: "",
  status: "pendente"
};

function formatarDataParaFala(data) {
  if (!data) {
    return "";
  }

  const dataFormatada = new Date(`${data}T00:00:00`);

  return dataFormatada.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function formatarHorarioParaFala(horario) {
  if (!horario) {
    return "";
  }

  const [hora, minuto] = horario.split(":");

  if (!hora || !minuto) {
    return horario;
  }

  if (minuto === "00") {
    return `${hora} horas`;
  }

  return `${hora} horas e ${minuto} minutos`;
}

function formatarStatusParaFala(status) {
  if (status === "concluido") {
    return "concluído";
  }

  return "pendente";
}

function montarTextoDoLembrete(lembrete) {
  const partes = [
    `Lembrete: ${lembrete.title}.`
  ];

  if (lembrete.description) {
    partes.push(`Descrição: ${lembrete.description}.`);
  }

  if (lembrete.date) {
    partes.push(`Data: ${formatarDataParaFala(lembrete.date)}.`);
  }

  if (lembrete.time) {
    partes.push(`Horário: ${formatarHorarioParaFala(lembrete.time)}.`);
  }

  if (lembrete.status) {
    partes.push(`Status: ${formatarStatusParaFala(lembrete.status)}.`);
  }

  return partes.join(" ");
}

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

  function reproduzirFormulario() {
  if (!form.title.trim()) {
    setError("Preencha o título para reproduzir o lembrete.");
    return;
  }

  const textoDoLembrete = montarTextoDoLembrete(form);

  falar(textoDoLembrete, user?.voicePreference);
  }

  function reproduzirLembrete(reminder) {
  const textoDoLembrete = montarTextoDoLembrete(reminder);

  falar(textoDoLembrete, user?.voicePreference);
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
    <PageContainer variant="gray">
      <PageHeader
        title="Meus lembretes"
        description={`Organize sua rotina de forma simples, ${user?.name || ""}!`}
      >
        <Link
          to="/"
          className="bg-blue-100 text-gray-800 font-bold px-5 py-3 rounded-lg hover:bg-blue-200 text-center"
        >
          Página inicial
        </Link>
      </PageHeader>

      <section className="grid lg:grid-cols-2 gap-6">
        <Card>
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {editingId ? "Editar lembrete" : "Adicionar lembrete"}
            </h2>

            <p className="text-gray-600 mb-6">
              Preencha as informações abaixo para lembrar de algo importante.
            </p>

            <FeedbackMessage type="error" message={error} />

            <Input
              label="Título"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />

            <div className="mb-4">
              <label className="block font-bold text-gray-800 mb-2">
                Descrição
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                rows="4"
                placeholder="Exemplo: tomar remédio depois do almoço"
              />
            </div>

            <Input
              label="Data"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
            />

            <Input
              label="Horário"
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              required
            />

            <div className="mb-4">
              <label className="block font-bold text-gray-800 mb-2">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              >
                <option value="pendente">Pendente</option>
                <option value="concluido">Concluído</option>
              </select>
            </div>

            <Button
              type="button"
              variant="secondary"
              className="w-full sm:w-full mb-3"
              onClick={reproduzirFormulario}
            >
              🔊 Testar áudio do lembrete
            </Button>

            <Button type="submit" className="w-full sm:w-full">
              {editingId ? "Salvar alterações" : "Adicionar lembrete"}
            </Button>

            {editingId && (
              <Button
                type="button"
                variant="neutral"
                className="w-full sm:w-full mt-3"
                onClick={() => {
                  setEditingId(null);
                  setForm(emptyForm);
                }}
              >
                Cancelar edição
              </Button>
            )}
          </form>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Lembretes cadastrados
          </h2>

          <p className="text-gray-600 mb-6">
            Aqui aparecem somente os lembretes da sua conta.
          </p>

          {reminders.length === 0 && (
            <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-4">
              <p className="text-gray-700 font-bold">
                Nenhum lembrete cadastrado ainda.
              </p>

              <p className="text-gray-600 mt-1">
                Use o formulário ao lado para criar seu primeiro lembrete.
              </p>
            </div>
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

                {reminder.description && (
                  <p className="text-gray-700 mt-1">
                    {reminder.description}
                  </p>
                )}

                <div className="mt-3 bg-white rounded-lg p-3">
                  <p className="font-bold text-gray-800">
                    Data: {reminder.date} às {reminder.time}
                  </p>

                  <p className="text-gray-700">
                    Status:{" "}
                    <span className="font-bold">
                      {reminder.status}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => reproduzirLembrete(reminder)}
                  >
                    🔊 Ouvir lembrete
                  </Button>

                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => handleEdit(reminder)}
                  >
                    Editar
                  </Button>

                  <Button
                    type="button"
                    variant="danger"
                    onClick={() => handleDelete(reminder)}
                  >
                    Excluir
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Card>
      </section>

      {reminderToDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <Card className="w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Excluir lembrete?
            </h2>

            <p className="text-gray-700 mb-2">
              Você tem certeza que deseja excluir este lembrete?
            </p>

            <p className="font-bold text-gray-800 bg-red-50 border-2 border-red-100 rounded-lg p-3 mb-6">
              {reminderToDelete.title}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button
                type="button"
                variant="neutral"
                onClick={() => setReminderToDelete(null)}
              >
                Cancelar
              </Button>

              <Button
                type="button"
                variant="dangerSolid"
                onClick={confirmDeleteReminder}
              >
                Sim, excluir
              </Button>
            </div>
          </Card>
        </div>
      )}
    </PageContainer>
  );
}