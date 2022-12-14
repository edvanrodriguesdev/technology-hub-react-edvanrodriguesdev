import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { TechContext } from "./TechContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setTechs } = useContext(TechContext)

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    async function authLogin() {
      if (token) {
        try {
          setGlobalLoading(true);
          const response = await api.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);

          
          

          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
          toast.error("Ops, algo deu errado!")
        } finally {
          setGlobalLoading(false);
        }
      }
    }
    authLogin();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    async function refresh() {
      if (token) {
        try {
          setGlobalLoading(true);
          const response = await api.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          await setTechs(response.data.techs);

          navigate("/dashboard");
        } catch (error) {

        } finally {
          setGlobalLoading(false);
        }
      }
    }
    refresh();
  }, []);

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", formData);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);

      setUser(response.data.user);

      toast.success("Login realizado com sucesso!");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("users", formData);
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userRegister,
        userLogout,
        loading,
        setLoading,
        globalLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
