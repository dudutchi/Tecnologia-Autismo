import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Lembretes from "./pages/Lembretes";
import Perfil from "./pages/Perfil";
import EsqueciSenha from "./pages/EsqueciSenha";
import RedefinirSenha from "./pages/RedefinirSenha";
import Acoes from "./pages/Acoes";
import Interacao from "./pages/Interacao";
import Favoritos from "./pages/Favoritos";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />
          <Route path="/redefinir-senha/:token" element={<RedefinirSenha />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/lembretes"
            element={
              <ProtectedRoute>
                <Lembretes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/acoes"
            element={
              <ProtectedRoute>
                <Acoes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/favoritos"
            element={
              <ProtectedRoute>
                <Favoritos />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interacao"
            element={
              <ProtectedRoute>
                <Interacao />
              </ProtectedRoute>
            }
          />

          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}