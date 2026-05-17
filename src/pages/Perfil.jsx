import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import PageContainer from "../components/ui/PageContainer";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import PasswordInput from "../components/ui/PasswordInput";
import FeedbackMessage from "../components/ui/FeedbackMessage";
import { falar } from "../utils/falar";

export default function Perfil() {
  const navigate = useNavigate();
  const { user, updateProfile, changePassword, deleteProfile } = useAuth();

  const [profileForm, setProfileForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    voicePreference: user?.voicePreference || "feminina"
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: ""
  });

  const [deletePassword, setDeletePassword] = useState("");
  const [showDeleteBox, setShowDeleteBox] = useState(false);

  const [profileMessage, setProfileMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [voiceMessage, setVoiceMessage] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setProfileForm({
      name: user?.name || "",
      email: user?.email || "",
      voicePreference: user?.voicePreference || "feminina"
    });
  }, [user]);

  function handleProfileChange(event) {
    setProfileForm({
      ...profileForm,
      [event.target.name]: event.target.value
    });
  }

  function handlePasswordChange(event) {
    setPasswordForm({
      ...passwordForm,
      [event.target.name]: event.target.value
    });
  }

  async function handleUpdateProfile(event) {
    event.preventDefault();

    setError("");
    setProfileMessage("");
    setVoiceMessage("");

    try {
      const response = await updateProfile(profileForm);
      setProfileMessage(response.message);
    } catch (error) {
      setError(
        error.response?.data?.message || "Erro ao atualizar perfil"
      );
    }
  }

  async function handleUpdateVoice(event) {
    event.preventDefault();

    setError("");
    setVoiceMessage("");
    setProfileMessage("");

    try {
      const response = await updateProfile(profileForm);
      setVoiceMessage(response.message || "Voz atualizada com sucesso");
    } catch (error) {
      setError(
        error.response?.data?.message || "Erro ao atualizar voz"
      );
    }
  }

  async function handleChangePassword(event) {
    event.preventDefault();

    setError("");
    setPasswordMessage("");

    try {
      const response = await changePassword(passwordForm);

      setPasswordMessage(response.message);

      setPasswordForm({
        currentPassword: "",
        newPassword: ""
      });
    } catch (error) {
      setError(
        error.response?.data?.message || "Erro ao alterar senha"
      );
    }
  }

  async function handleDeleteProfile(event) {
    event.preventDefault();

    setDeleteError("");
    setError("");

    try {
      await deleteProfile(deletePassword);
      navigate("/login");
    } catch (error) {
      setDeleteError(
        error.response?.data?.message || "Erro ao excluir perfil"
      );
    }
  }

  return (
    <PageContainer variant="gray">
      <PageHeader
        title="Meu perfil"
        description="Veja e altere seus dados de acesso com segurança."
      >
        <Link
          to="/"
          className="bg-blue-100 text-gray-800 font-bold px-5 py-3 rounded-lg hover:bg-blue-200 text-center"
        >
          Página inicial
        </Link>
      </PageHeader>

      <FeedbackMessage type="error" message={error} />

      <section className="grid lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 text-gray-800 font-bold text-3xl flex items-center justify-center">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Dados pessoais
              </h2>

              <p className="text-gray-600">
                Altere seu nome e e-mail.
              </p>
            </div>
          </div>

          <FeedbackMessage type="success" message={profileMessage} />

          <form onSubmit={handleUpdateProfile}>
            <Input
              label="Nome"
              name="name"
              value={profileForm.name}
              onChange={handleProfileChange}
              required
            />

            <Input
              label="E-mail"
              name="email"
              type="email"
              value={profileForm.email}
              onChange={handleProfileChange}
              required
            />

            <Button type="submit" className="w-full sm:w-full">
              Salvar dados
            </Button>
          </form>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Alterar senha
          </h2>

          <p className="text-gray-600 mb-6">
            Informe sua senha atual e escolha uma nova senha.
          </p>

          <FeedbackMessage type="success" message={passwordMessage} />

          <form onSubmit={handleChangePassword}>
            <PasswordInput
              label="Senha atual"
              name="currentPassword"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              required
            />

            <PasswordInput
              label="Nova senha"
              name="newPassword"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              required
            />

            <Button type="submit" className="w-full sm:w-full">
              Alterar senha
            </Button>
          </form>
        </Card>
      </section>

      <Card className="mt-6 border-2 border-yellow-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Voz da comunicação
        </h2>

        <p className="text-gray-600 mb-6">
          Escolha qual voz será usada quando o usuário tocar nas comunicações.
          Essa preferência ficará salva no perfil.
        </p>

        <FeedbackMessage type="success" message={voiceMessage} />

        <form onSubmit={handleUpdateVoice}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <label
              className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                profileForm.voicePreference === "feminina"
                  ? "border-green-400 bg-green-50"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="voicePreference"
                value="feminina"
                checked={profileForm.voicePreference === "feminina"}
                onChange={handleProfileChange}
                className="sr-only"
              />

              <div className="flex items-center gap-3">
                <span className="text-3xl">👩</span>

                <div>
                  <p className="font-bold text-gray-800">
                    Voz feminina
                  </p>

                  <p className="text-sm text-gray-600">
                    Usar voz feminina nas comunicações.
                  </p>
                </div>
              </div>
            </label>

            <label
              className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                profileForm.voicePreference === "masculina"
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="voicePreference"
                value="masculina"
                checked={profileForm.voicePreference === "masculina"}
                onChange={handleProfileChange}
                className="sr-only"
              />

              <div className="flex items-center gap-3">
                <span className="text-3xl">👨</span>

                <div>
                  <p className="font-bold text-gray-800">
                    Voz masculina
                  </p>

                  <p className="text-sm text-gray-600">
                    Usar voz masculina nas comunicações.
                  </p>
                </div>
              </div>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() =>
                falar(
                  "Olá, esta é a voz escolhida para as comunicações.",
                  profileForm.voicePreference
                )
              }
              className="bg-blue-100 text-gray-800 font-bold px-5 py-3 rounded-lg hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Testar voz escolhida
            </button>

            <Button type="submit" className="w-full sm:w-auto">
              Salvar voz
            </Button>
          </div>
        </form>
      </Card>

      <Card className="mt-6 border-2 border-red-100">
        <h2 className="text-2xl font-bold text-red-700 mb-2">
          Excluir perfil
        </h2>

        <p className="text-gray-700 mb-4">
          Ao excluir seu perfil, sua conta e todos os seus lembretes e favoritos
          serão apagados. Essa ação não poderá ser desfeita.
        </p>

        {!showDeleteBox ? (
          <Button
            type="button"
            variant="danger"
            onClick={() => setShowDeleteBox(true)}
          >
            Excluir minha conta
          </Button>
        ) : (
          <form
            onSubmit={handleDeleteProfile}
            className="bg-red-50 border-2 border-red-100 rounded-xl p-4 mt-4"
          >
            <p className="font-bold text-red-700 mb-4">
              Confirme sua senha para excluir definitivamente sua conta.
            </p>

            <FeedbackMessage type="error" message={deleteError} />

            <PasswordInput
              label="Senha atual"
              name="deletePassword"
              value={deletePassword}
              onChange={(event) => setDeletePassword(event.target.value)}
              required
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                variant="neutral"
                onClick={() => {
                  setShowDeleteBox(false);
                  setDeletePassword("");
                  setDeleteError("");
                }}
              >
                Cancelar
              </Button>

              <Button type="submit" variant="dangerSolid">
                Sim, excluir definitivamente
              </Button>
            </div>
          </form>
        )}
      </Card>
    </PageContainer>
  );
}