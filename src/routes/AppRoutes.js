import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { Home, About, HomeLayout } from "../pages/home";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
