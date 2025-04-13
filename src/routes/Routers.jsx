import React, { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Routes, } from "react-router-dom";
import PersistentDrawerLeft from "../components/Navbar";
import { urls } from "./Urls";
import Login from "../pages/auth/Login";

const Routers = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route element={<ProtectedRoute />}>
        <Route
          // path="/dashboard"
          element={<PersistentDrawerLeft />}
        >
          {urls.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};
export default Routers;
