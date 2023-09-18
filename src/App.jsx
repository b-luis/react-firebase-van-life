import React from "react";
import { Header, Footer } from "./components";
import { Home, About, Van, VanDetail, NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";
import "./miragejs/server";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Van />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
