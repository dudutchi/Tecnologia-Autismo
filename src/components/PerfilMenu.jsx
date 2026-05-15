import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PerfilMenu() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const initial = user?.name?.charAt(0)?.toUpperCase() || "U";

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-white text-gray-800 font-bold text-xl flex items-center justify-center shadow hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300"
        title="Meu perfil"
      >
        {initial}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50">
          <div className="mb-4 border-b pb-3">
            <p className="font-bold text-gray-800">
              {user?.name}
            </p>

            <p className="text-sm text-gray-600 break-all">
              {user?.email}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              to="/perfil"
              onClick={() => setOpen(false)}
              className="bg-blue-100 text-gray-800 font-bold px-4 py-3 rounded-lg text-center hover:bg-blue-200"
            >
              Meu perfil
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="bg-red-100 text-red-700 font-bold px-4 py-3 rounded-lg hover:bg-red-200"
            >
              Sair
            </button>
          </div>
        </div>
      )}
    </div>
  );
}