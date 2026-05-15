import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    try {
      const response = await api.get("/auth/me");
      setUser(response.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    const response = await api.post("/auth/login", {
      email,
      password
    });

    setUser(response.data.user);
  }

  async function register(name, email, password) {
    const response = await api.post("/auth/register", {
      name,
      email,
      password
    });

    setUser(response.data.user);
  }

  async function updateProfile(data) {
  const response = await api.put("/users/profile", data);

  setUser(response.data.user);

  return response.data;
  }

  async function changePassword(data) {
  const response = await api.put("/users/password", data);

  return response.data;
  }


  async function logout() {
    await api.post("/auth/logout");
    setUser(null);
  }

  async function deleteProfile(password) {
    const response = await api.delete("/users/profile", {
      data: {
        password
      }
    });

    setUser(null);

    return response.data;
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        updateProfile,
        changePassword,
        deleteProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}