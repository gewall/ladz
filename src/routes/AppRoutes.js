import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />}></Route>
    </Routes>
  );
};

export default AppRoutes;
