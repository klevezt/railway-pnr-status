import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./Content";
import NotFound from "../Pages/404/NotFound";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <main className="container-fluid my-5 row">
      <div className="col-12 col-md-6 col-lg-3">
        <Sidebar />
      </div>
      <div className="col-12 col-md-6 col-lg-9">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
