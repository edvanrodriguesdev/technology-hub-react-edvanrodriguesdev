import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [idTech, setIdTech] = useState(null);
  const [titleTech, setTitleTech] = useState(null);
  const [statusTech, setStatusTech] = useState(null);
  const [techs, setTechs] = useState([]);
  const token = localStorage.getItem("@TOKEN");
  const { user } = useContext(UserContext)


  useEffect(() => {
    if(!!user){
       setTechs(user.techs)
    }
}, [user])

  const createTech = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      Reload();
      toast.success("Alteração realizada com sucesso!");
      setLoading(false);
    } catch (error) {
      toast.error("Ops, algo deu errado!");
      console.log(error);
      setLoading(false);
    }
  };

  const editTech = async (formData) => {
    try {
      setLoading(true);
      if (idTech !== null) {
        const response = await api.put(`users/techs/${idTech}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        Reload();

        toast.success("Status editado com sucesso!");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Ops, algo deu errado!");
      console.log(error);
      setLoading(false);
    }
  };

  const deleteTech = async () => {
    try {
      setLoading(true);
      if (idTech !== null) {
        const response = await api.delete(`users/techs/${idTech}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        Reload();
        toast.success("Tecnologia apagada com sucesso!");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Ops, algo deu errado!");
      console.log(error);
      setLoading(false);
    }
  };

  const Reload = () => {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;
    api.get("profile").then((res) => setTechs(res.data.techs));
  };

  return (
    <TechContext.Provider
      value={{
        loading,
        createTech,
        deleteTech,
       
        setAddModal,
        addModal,
        editModal,
        setEditModal,
        idTech,
        setIdTech,
      
        titleTech,
        setTitleTech,
        editTech,
        setTechs,
        techs,
        deleteModal,
        setDeleteModal,
        statusTech,
        setStatusTech
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
