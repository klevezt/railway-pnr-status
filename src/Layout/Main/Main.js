import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./Content";
import NotFound from "../Pages/NotFound";
import Sidebar from "../Sidebar/Sidebar";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import FAQ from "../Pages/FAQ";
import ContactUs from "../Pages/ContactUs";

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
