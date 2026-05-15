import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Perfil() {
  const { user, updateProfile, changePassword, deleteProfile } = useAuth();

  const [profileForm, setProfileForm] = useState({
    name: user?.name || "",
    email: user?.email || ""
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: ""
  });

  const [profileMessage, setProfileMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [error, setError] = useState("");
  const [deletePassword, setDeletePassword] = useState("");
  const [showDeleteBox, setShowDeleteBox] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const navigate = useNavigate();

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

    try {
      const response = await updateProfile(profileForm);

      setProfileMessage(response.message);
    } catch (error) {
      setError(
        error.response?.data?.message || "Erro ao atualizar perfil"
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
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="bg-white rounded-2xl shadow p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Meu perfil
          </h1>

          <p className="text-gray-600">
            Gerencie seus dados de acesso
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

      {error && (
        <p className="bg-red-100 text-red-700 p-4 rounded-xl mb-6 font-bold">
          {error}
        </p>
      )}

      <section className="grid lg:grid-cols-2 gap-6">
        <form
          onSubmit={handleUpdateProfile}
          className="bg-white rounded-2xl shadow p-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 text-gray-800 font-bold text-3xl flex items-center justify-center">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Dados pessoais
              </h2>

              <p className="text-gray-600">
                Altere seu nome e e-mail
              </p>
            </div>
          </div>

          {profileMessage && (
            <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
              {profileMessage}
            </p>
          )}

          <label className="block font-bold mb-2">
            Nome
          </label>
          <input
            name="name"
            value={profileForm.name}
            onChange={handleProfileChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
            required
          />

          <label className="block font-bold mb-2">
            E-mail
          </label>
          <input
            name="email"
            type="email"
            value={profileForm.email}
            onChange={handleProfileChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-300 text-gray-800 font-bold py-3 rounded-lg"
          >
            Salvar dados
          </button>
        </form>

        <form
          onSubmit={handleChangePassword}
          className="bg-white rounded-2xl shadow p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Alterar senha
          </h2>

          <p className="text-gray-600 mb-6">
            Informe sua senha atual e a nova senha
          </p>

          {passwordMessage && (
            <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
              {passwordMessage}
            </p>
          )}

          <label className="block font-bold mb-2">
            Senha atual
          </label>
          <input
            name="currentPassword"
            type="password"
            value={passwordForm.currentPassword}
            onChange={handlePasswordChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
            required
          />

          <label className="block font-bold mb-2">
            Nova senha
          </label>
          <input
            name="newPassword"
            type="password"
            value={passwordForm.newPassword}
            onChange={handlePasswordChange}
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
            minLength="6"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-400 text-gray-800 font-bold py-3 rounded-lg"
          >
            Alterar senha
          </button>
        </form>
      </section>

      <section className="bg-white rounded-2xl shadow p-6 mt-6 border-2 border-red-100">
        <h2 className="text-2xl font-bold text-red-700 mb-2">
            Excluir perfil
        </h2>

        <p className="text-gray-700 mb-4">
            Ao excluir seu perfil, sua conta e todos os seus lembretes serão apagados.
            Essa ação não poderá ser desfeita.
        </p>

        {!showDeleteBox ? (
            <button
            type="button"
            onClick={() => setShowDeleteBox(true)}
            className="bg-red-100 text-red-700 font-bold px-4 py-3 rounded-lg hover:bg-red-200"
            >
            Excluir minha conta
            </button>
        ) : (
            <form
            onSubmit={handleDeleteProfile}
            className="bg-red-50 border-2 border-red-100 rounded-xl p-4 mt-4"
            >
            <p className="font-bold text-red-700 mb-4">
                Confirme sua senha para excluir definitivamente sua conta.
            </p>

            {deleteError && (
                <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                {deleteError}
                </p>
            )}

            <label className="block font-bold mb-2">
                Senha atual
            </label>

            <input
                type="password"
                value={deletePassword}
                onChange={(event) => setDeletePassword(event.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
                required
            />

            <div className="flex flex-col sm:flex-row gap-3">
                <button
                type="button"
                onClick={() => {
                    setShowDeleteBox(false);
                    setDeletePassword("");
                    setDeleteError("");
                }}
                className="bg-gray-200 text-gray-800 font-bold px-4 py-3 rounded-lg"
                >
                Cancelar
                </button>

                <button
                type="submit"
                className="bg-red-600 text-white font-bold px-4 py-3 rounded-lg hover:bg-red-700"
                >
                Sim, excluir definitivamente
                </button>
            </div>
            </form>
        )}
    </section>
    </main>
  );
}