import React from "react";
import { Footer, Layout } from "./components";
import {
  Home,
  About,
  Van,
  VanDetail,
  NotFound,
  Dashboard,
  Income,
  Reviews,
  Layout,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import "./miragejs/server";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
