import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Dashboard } from "./components/Dashboard";

export const RoutesComponent = ({ setUser, user, userLogout }) => {
  return (
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser} />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Dashboard user={user} userLogout={userLogout} />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
