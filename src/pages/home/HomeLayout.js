import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { FixedSidebar } from "../../components/Sidebar";
import { HtmlHeader } from "../../components/utils";
import { useSelector } from "../../lib/hooks";

const HomeLayout = () => {
  const { sidebar } = useSelector((state) => state);

  return (
    <>
      <HtmlHeader title={`Home - ${process.env.REACT_APP_NAME}`} />
      <Navbar />
      <FixedSidebar active={sidebar?.fixed} />

      <main className="bg-white dark:bg-slate-800">
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
