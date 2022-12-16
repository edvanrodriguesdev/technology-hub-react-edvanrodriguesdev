import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { UserProvider } from "../provides/UserContext";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={ <ProtectedRoutes />  }>
        
        <Route
          index
          element={
              <Dashboard />
   
          }
        />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
